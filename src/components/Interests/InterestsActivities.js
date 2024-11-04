import React from 'react';
import TimelineView from './TImelineView';
import facilPhoto from './facil.JPG';
import foodPhoto from './food.JPG';
import gourmetPhoto from './gourmet.JPG';
import myPhoto from './TM.JPG';
import tmPhoto from './TM2.JPG';


const timelineItemsList = [
  {
    id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
    categoryId: 'COURSE',
    title: 'February 2012',
    courseTitle: 'Infocomm Club Member',
    description:
      'I was a member of the Infocomm Club in my secondary school. Here I learned basic Photo editing skills, how to use the PA systems of the schools, set up a sound system for events and also taking photos with DSLR.',
    duration: '2 years',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
        name: 'Photography',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
        name: 'Sound System',
      },

    ],
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: 'February 2014',
    projectTitle: 'Infocomm Club VP',
    description:
      'I became the Vice President of my secondary school Infocomm Club. I was in charge of the club and also the events that the club was involved in.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    duration: '1 Year',
  },
  {
    id: '40b82899-fdf7-4a3e-a43a-41a9917b4582',
    categoryId: 'COURSE',
    title: 'April 2016',
    courseTitle: 'Toastmasters Club',
    description:
      'During my time as a Member in Ngee Ann Polytechnic Toastmasters Club, I learned how to speak in front of a crowd, how to present myself and also how to be a good leader.',
    duration: '3 years',
    imageUrl: myPhoto
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: 'May 2018',
    projectTitle: 'Toastmasters Area Secretary',
    description:
      'As the Area Secretary for Area D4 in Singapore, I was in charge of the Area D4 Instagram page. I also supported the Area Director in the planning of events and also the execution of the events.',
    imageUrl: tmPhoto,
    duration: '1 Year',
    projectUrl: 'https://www.instagram.com/d4studentclubs/?hl=en',
  },
  {
    id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
    categoryId: 'PROJECT',
    title: 'May 2019',
    projectTitle: 'Food Blogging',
    description: 'Started an Instagram account to share my food journey.',
    imageUrl: foodPhoto,
    duration: '2 hrs',
    projectUrl: 'https://www.instagram.com/lee2eat/?hl=en',
  },
  {
    id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
    categoryId: 'PROJECT',
    title: 'December 2021',
    projectTitle: 'Gourmet Club General Secretary',
    description:
      'I was in charge of membership and also sending out emails to the school population about the events that the club was involved in. I also supported the club in the planning of events and also the execution of the events.',
    imageUrl:gourmetPhoto,
    duration: '1 Year',
    projectUrl: 'https://www.instagram.com/smugourmetclub/?hl=en',
  },
  {
    id: '0a35abbe-22ca-40a1-81da-613f656b7702',
    categoryId: 'PROJECT',
    title: 'June 2022',
    projectTitle: 'Faculty Orientation Camp Facilitator',
    description:
      'I was a facilitator for the School of Computing and Information System Orientation Camp. I was in charge of 2 groups of 6-8 students and the execution of the events.',
    imageUrl: facilPhoto,
    duration: '3 months',
    projectUrl: 'https://www.instagram.com/p/CfS45LAJl9o/?hl=en',
  },
];

const InterestsActivities = () => (
  <div>
    <TimelineView timelineItemsList={timelineItemsList} />
  </div>
);

export default InterestsActivities;
