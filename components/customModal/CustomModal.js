'use client';
import React from 'react';
import { globalActions } from '../../redux/features/global/reducer';
import { globalModalValue } from '../../redux/features/global/selector';
import styles from './CustomModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Magnetic from '../../common/Magnetic';
function CustomModal() {
  const modal = useSelector(globalModalValue);
  const dispatch = useDispatch();
  const onCloseButtonClick = () => dispatch(globalActions.hideModal());
  const clickToLink = (link) => {
    window.location.href = link;
  };
  if (!modal) {
    return null;
  } else {
    switch (modal.type) {
      case 'sukses':
        return (
          <div
            className={`${styles.modalOverlay} relative z-10`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className={`fixed inset-0 transition-opacity`}> </div>
            <div className={`fixed inset-0 z-90 w-screen overflow-y-auto`}>
              <div className="flex min-h-full items-end justify-center p-4 text-center md:p-0 sm:items-center sm:p-0">
                <div
                  className={`${styles.modal} relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}
                >
                  {/* mulai modal content */}
                  <section
                    className={`${styles.carousel}`}
                    aria-label="Gallery"
                  >
                    <div
                      className={`${styles.modalClose}`}
                      onClick={onCloseButtonClick}
                    >
                      <Magnetic>
                        <div className={styles.round}>
                          <div className={styles.x}>X</div>
                        </div>
                      </Magnetic>
                    </div>
                    <ol className={`${styles.carouselViewport}`}>
                      {modal.data.projectImages.map((projectImage, idx) => {
                        return (
                          <li
                            key={idx}
                            id={`carousel__slide${idx}`}
                            tabindex="0"
                            className={`${styles.carouselSlide}`}
                          >
                            <div className={`mx-2 ${styles.imageContain}`}>
                              <Image
                                className={`${styles.image}`}
                                src={`/images/${projectImage}`}
                                fill
                                style={{ objectFit: 'contain' }}
                              />
                            </div>
                            <div className={`${styles.carouselSnapper}`}></div>
                            <a
                              href={`#carousel__slide${
                                idx === 0
                                  ? modal.data.projectImages.length - 1
                                  : idx
                              }`}
                              class="carousel__prev"
                            ></a>
                            <a
                              href={`#carousel__slide${
                                idx + 1 === modal.data.projectImages.length
                                  ? 0
                                  : idx
                              }`}
                              class="carousel__next"
                            ></a>
                          </li>
                        );
                      })}
                    </ol>
                    <aside className={`${styles.carouselNavigation}`}>
                      <ol className={`${styles.carouselNavigationList}`}>
                        {modal.data.projectImages.map((techIcon, idx) => {
                          return (
                            <li
                              key={idx}
                              className={`${styles.carouselNavigationItem}`}
                            >
                              <a
                                href={`#carousel__slide${idx}`}
                                className={`${styles.carouselNavigationButton}`}
                              >
                                Go to slide {idx}
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </aside>
                  </section>
                  {/* akhir carousel */}
                  {/* tech logo */}
                  <div className={`${styles.techLogoContainer}`}>
                    {modal.data.techIcons.map((techIcon, idx) => {
                      return (
                        <div key={idx} className={`${styles.techLogo} mx-2`}>
                          <Image
                            src={`/images/${techIcon}`}
                            width="40"
                            height="40"
                            alt="background"
                          />
                        </div>
                      );
                    })}
                  </div>
                  {modal.data.detail && (
                    <div>
                      <h3>Summary:</h3>
                      <p>{modal.data.detail}</p>
                    </div>
                  )}
                  {modal.data.objective && (
                    <div>
                      <h3>Objective:</h3>
                      <p>{modal.data.objective}</p>
                    </div>
                  )}
                  {/* akhir modal content */}
                  <div className={`${styles.buttonModalContainer}`}>
                    <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      {Object.keys(modal.data.buttons).map((button) => {
                        return (
                          <button
                            onClick={() => {
                              clickToLink(modal.data.buttons[button]);
                            }}
                            type="button"
                            className="mt-3 ml-4 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          >
                            {button}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div
            className={`${styles.modalOverlay}`}
            onClick={onCloseButtonClick}
          >
            <div className=" d-flex h-100 ">
              <div className={`${styles.modal} shadow-sm rounded-3 `}>
                <div
                  className={`${styles.modalClose} justify-content-end d-flex `}
                  onClick={onCloseButtonClick}
                >
                  &#10005;
                </div>
                <div className=" fs-1 ">{modal.title}</div>
                <div className=" pb-3 ">{modal.description}</div>
                <div className=" d-flex gap-2 justify-content-end ">
                  {modal.buttons.map((button, idx) => {
                    return (
                      <button
                        className="btn btn-primary"
                        key={idx}
                        type="button"
                        onClick={button.buttonFunc}
                      >
                        {button.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}

export default CustomModal;
