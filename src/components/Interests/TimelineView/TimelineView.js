import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import { AiFillGithub, AiFillInstagram, AiOutlineLink } from 'react-icons/ai';
import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
  TimelineCard,
  CardTitle,
  CardDate,
  CardContent,
  TagsContainer,
  Tag,
  LinkButton,
  IconContainer,
  PhotoCard,
  PhotoContainer,
  PhotoOverlay,
  PhotoDescription,
  NavigationContainer,
  DurationLabel,
} from './styledComponents';

const TimelineView = ({ timelineItemsList }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // Create items array for navigation
  const timelineItems = timelineItemsList.map(item => ({
    title: item.title,
    cardTitle: item.categoryId === 'PROJECT' ? item.projectTitle : item.courseTitle,
  }));

  // New function to determine which icon to display based on URL
  const getLinkIcon = (url) => {
    if (!url) return <AiOutlineLink />;
    if (url.includes('instagram.com')) return <AiFillInstagram />;
    if (url.includes('github.com')) return <AiFillGithub />;
    return <AiOutlineLink />;
  };

  const renderTimelineCard = item => {
    const showPhotoCard = new Date(item.title).getFullYear() >= 2016;
    const hasTags = item.tagsList && item.tagsList.length > 0;
    
    return (
      <TimelineCard>
        <CardDate>{item.title}</CardDate>
        <CardTitle>
          {item.categoryId === 'PROJECT' ? item.projectTitle : item.courseTitle}
        </CardTitle>
        
        {/* Display duration if available */}
        {item.duration && <DurationLabel>{item.duration}</DurationLabel>}
        
        {showPhotoCard && item.imageUrl && (
          <PhotoCard>
            <PhotoContainer>
              <img 
                src={item.imageUrl || "/api/placeholder/400/200"} 
                alt={item.projectTitle || item.courseTitle}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/api/placeholder/400/200";
                }}
              />
              <PhotoOverlay>
                <PhotoDescription>
                  {item.categoryId === 'PROJECT' ? 'Project' : 'Activity'} Photo
                </PhotoDescription>
              </PhotoOverlay>
            </PhotoContainer>
          </PhotoCard>
        )}

        <CardContent>{item.description}</CardContent>
        
        {hasTags && (
          <TagsContainer>
            {item.tagsList.map(tag => (
              <Tag key={tag.id}>{tag.name}</Tag>
            ))}
          </TagsContainer>
        )}
        
        {item.projectUrl && (
          <LinkButton
            href={item.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContainer>
              {getLinkIcon(item.projectUrl)}
            </IconContainer>
            View Project
          </LinkButton>
        )}
      </TimelineCard>
    );
  };

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF
            <CCBPHeading>Interests & Activities</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <NavigationContainer>
          <Chrono
            items={timelineItems}
            mode="VERTICAL_ALTERNATING"
            cardHeight={350} // Increased from 300 to accommodate more content
            scrollable={{ scrollbar: true }}
            enableOutline={false}
            activeItemIndex={activeItemIndex}
            onItemSelected={(data) => {
              setActiveItemIndex(data.itemIndex);
            }}
            theme={{
              primary: '#8855ff',
              secondary: '#ffffff',
              cardBgColor: '#ffffff',
              cardForeColor: '#171f46',
              titleColor: '#2b237c',
              titleColorActive: '#8855ff',
            }}
            fontSizes={{
              title: '1rem',
              cardTitle: '1.2rem',
              cardText: '0.9rem',
            }}
            classNames={{
              card: 'timeline-card',
              cardMedia: 'timeline-card-media',
              cardSubTitle: 'timeline-card-subtitle',
              cardText: 'timeline-card-text',
              cardTitle: 'timeline-card-title',
              controls: 'timeline-controls',
              title: 'timeline-title',
            }}
            timelinePointShape="circle"
            slideItemDuration={2000}
            slideShow={false}
            enableDarkToggle={false}
          >
            {timelineItemsList.map(item => renderTimelineCard(item))}
          </Chrono>
        </NavigationContainer>
      </ResponsiveContainer>
    </TimelineContainer>
  );
};

export default TimelineView;