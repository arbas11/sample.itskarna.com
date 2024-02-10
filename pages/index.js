'use client';
import ProjectCard from '@/components/projectCard';
import { useState } from 'react';
import classes from '../styles/homepage.module.css';
import CustomModal from '@/components/customModal/CustomModal';
import Header from '../components/Header/index';
import Landing from '../components/Landing/index';
import { backend, frontend, infrastructure, other } from '@/data/data';
import { useDispatch } from 'react-redux';
import { globalActions } from '../redux/features/global/reducer';
// import { poppins } from '@/app/ui/fonts';

// const poppin = poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const clickToLink = (link) => {
    window.location.href = link;
  };
  return (
    <main
      className={`flex justify-center flex-col min-h-screen items-center justify-between lg:p-10`}
    >
      <CustomModal />
      <Header />
      <Landing />
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">My project sample</code>
        </p>
        <div
          className={`fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none`}
        >
          <a
            className={`${classes.footer} pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0`}
            href="https://arbas.itskarna.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By ARBAS
          </a>
        </div>
      </div> */}
      <div className={`${classes.title} relative flex place-items-center`}>
        <h1 id="frontend">FRONT-END</h1>
      </div>

      <div className="mb-20 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {frontend.map((cardData, idx) => {
          return (
            <ProjectCard
              cardImage={cardData.cardImage}
              projectTitle={cardData.projectTitle}
              projectLink={cardData.projectLink}
              projectDescription={cardData.projectDescription}
              buttonTitle={cardData.buttonTitle}
              techIcons={cardData.modalData.techIcons}
              type={cardData.type}
              buttonFunc={() => {
                dispatch(
                  globalActions.showModal({
                    type: 'sukses',
                    data: cardData.modalData,
                    buttons: [
                      {
                        buttonFunc: () => {
                          dispatch(globalActions.hideModal());
                          handleClose();
                        },
                        title: 'close',
                      },
                    ],
                  })
                );
              }}
            />
          );
        })}
      </div>
      <div className={`${classes.title} relative flex place-items-center`}>
        <h1 id="backend">BACK-ENDS</h1>
      </div>

      <div className="mb-20 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {backend.map((cardData, idx) => {
          return (
            <ProjectCard
              cardImage={cardData.cardImage}
              projectTitle={cardData.projectTitle}
              projectLink={cardData.projectLink}
              projectDescription={cardData.projectDescription}
              buttonTitle={cardData.buttonTitle}
              techIcons={cardData.modalData.techIcons}
              buttonFunc={() => {
                dispatch(
                  globalActions.showModal({
                    type: 'sukses',
                    data: cardData.modalData,
                    buttons: [
                      {
                        buttonFunc: () => {
                          dispatch(globalActions.hideModal());
                          handleClose();
                        },
                        title: 'close',
                      },
                    ],
                  })
                );
              }}
            />
          );
        })}
      </div>
      <div className={`${classes.title} relative flex place-items-center`}>
        <h1 id="infrastructure">INFRASTRUCTURE</h1>
      </div>

      <div className="mb-20 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {infrastructure.map((cardData, idx) => {
          return (
            <ProjectCard
              cardImage={cardData.cardImage}
              projectTitle={cardData.projectTitle}
              projectLink={cardData.projectLink}
              projectDescription={cardData.projectDescription}
              buttonTitle={cardData.buttonTitle}
              techIcons={cardData.modalData.techIcons}
              buttonFunc={() => {
                dispatch(
                  globalActions.showModal({
                    type: 'sukses',
                    data: cardData.modalData,
                    buttons: [
                      {
                        buttonFunc: () => {
                          dispatch(globalActions.hideModal());
                          handleClose();
                        },
                        title: 'close',
                      },
                    ],
                  })
                );
              }}
            />
          );
        })}
      </div>
      <div className={`${classes.title} relative flex place-items-center`}>
        <h1 id="others">OTHERS</h1>
      </div>

      <div className="mb-20 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {other.map((cardData, idx) => {
          return (
            <ProjectCard
              cardImage={cardData.cardImage}
              projectTitle={cardData.projectTitle}
              projectLink={cardData.projectLink}
              projectDescription={cardData.projectDescription}
              buttonTitle={cardData.buttonTitle}
              techIcons={cardData.modalData.techIcons}
              buttonFunc={() => {
                dispatch(
                  globalActions.showModal({
                    type: 'sukses',
                    data: cardData.modalData,
                    buttons: [
                      {
                        buttonFunc: () => {
                          dispatch(globalActions.hideModal());
                          handleClose();
                        },
                        title: 'close',
                      },
                    ],
                  })
                );
              }}
            />
          );
        })}
      </div>
    </main>
  );
}
