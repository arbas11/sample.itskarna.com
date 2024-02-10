import React from 'react';
import Image from 'next/image';
import classes from './project-card.module.scss';
import { useDispatch } from 'react-redux';
import { globalActions } from '../redux/features/global/reducer';

function ProjectCard({
  projectTitle,
  projectLink,
  cardImage,
  projectDescription,
  buttonTitle,
  buttonFunc,
  techIcons,
  type,
}) {
  const dispatch = useDispatch();
  const clickToLink = (link) => {
    window.location.href = link;
  };
  const imageProducer = (type) => {
    switch (type) {
      case 'portofolio':
        return (
          <div className={`mx-2 p-3 ${classes.imageContain}`}>
            <Image
              className={`${classes.porto} ${classes.image}`}
              src={cardImage}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        );
      default:
        return (
          <div className={`mx-2 ${classes.imageContain}`}>
            <Image
              className={`${classes.image}`}
              src={cardImage}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        );
    }
  };
  return (
    <div
      className={`${classes.cardContainer} flex flex-col max-w-sm rounded overflow-hidden shadow-lg mx-2 my-1 mb-7 transition-colors bg-slate-400 hover:border-blue-300 hover:bg-slate-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
    >
      <div
        className={` ${classes.imageWraper} rounded-xl mb-5 mt-2 flex w-full justify-center`}
      >
        {imageProducer(type)}
      </div>
      <div className={`${classes.techLogoContainer}`}>
        {techIcons.map((techIcon, idx) => {
          return (
            <div key={idx} className={`${classes.techLogo} mr-2`}>
              <Image
                src={`/images/${techIcon}`}
                width="30"
                height="30"
                alt="background"
              />
            </div>
          );
        })}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectTitle}</div>
        <div>
          <p className="text-gray-700 text-base">{projectDescription}</p>
        </div>
      </div>
      <div className="grow flex justify-center items-end">
        <button
          className="mb-2 bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded"
          onClick={() => {
            // clickToLink(projectLink);
            buttonFunc();
          }}
        >
          Detail
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
{
  /* <div class="mx-2 my-2 max-w-sm rounded overflow-hidden shadow-lg">
<div className="flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
  <a href={projectLink} target="_blank" rel="noopener noreferrer">
    <div
      className={`flex-grow ${classes.imageWraper} rounded-xl mb-5 flex w-full justify-center`}
    >
      <div className={`${classes.imageContain}`}>
        <Image
          className={`${classes.image}`}
          src={cardImage}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{projectTitle}</div>
      <p class="text-gray-700 text-base">{projectDescription}</p>
    </div> */
}
