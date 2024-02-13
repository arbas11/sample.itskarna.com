'use client';
import ProjectCard from '@/components/projectCard';
import { useState } from 'react';
import classes from '../styles/homepage.module.css';
import CustomModal from '@/components/customModal/CustomModal';
import Header from '../components/Header/index';
import Landing from '../components/Landing/index';
import { data } from '@/data/data';
import { useDispatch } from 'react-redux';
import { globalActions } from '../redux/features/global/reducer';
import useWindowDimensions from '@/hooks/useWindowDimensions';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const breakpoint = 488;
  const smBreakpoint = 370;

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
      {data.map((value, idx) => {
        return (
          <>
            <div
              key={idx}
              className={
                width <= smBreakpoint
                  ? `${classes.title} ${classes.titleSm} relative flex place-items-center`
                  : `${classes.title} relative flex place-items-center`
              }
            >
              <h1 id={value.name}>{value.title}</h1>
            </div>
            <div className="mb-20 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
              {value.data.map((cardData, idx) => {
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
          </>
        );
      })}
    </main>
  );
}
