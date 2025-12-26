import styled from 'styled-components';

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 0;
  background: #f8f9fa;
  
  .react-chrono {
    width: 100%;
  }
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Heading = styled.h1`
  color: #171f46;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 0;
  
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const CCBPHeading = styled.div`
  color: #8855ff;
  font-size: 2rem;
  margin-top: 0.5rem;
  font-weight: 700;
  
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const TimelineCard = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const CardDate = styled.div`
  color: #8855ff;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.h3`
  color: #171f46;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

// New component for duration
export const DurationLabel = styled.div`
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-style: italic;
`;

export const CardContent = styled.p`
  color: #4a5568;
  font-size: 0.975rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  background: #f3f0ff;
  color: #8855ff;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e9dfff;
    transform: translateY(-2px);
  }
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #8855ff;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #6633cc;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(102, 51, 204, 0.3);
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
`;

export const PhotoCard = styled.div`
  margin: 1rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    img {
      transform: scale(1.08);
    }
  }
`;

export const PhotoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;

  ${PhotoContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PhotoDescription = styled.p`
  color: white;
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  
  /* Style the timeline navigation */
  .timeline-controls {
    background: white;
    border-radius: 8px;
    padding: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    button {
      background: transparent;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      color: #8855ff;
      transition: all 0.2s ease;
      
      &:hover {
        opacity: 0.8;
        transform: scale(1.1);
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  /* Style the timeline points */
  .timeline-item-title {
    background: white !important;
    padding: 0.5rem 1rem !important;
    border-radius: 4px !important;
    font-weight: 500 !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
    transition: all 0.2s ease !important;
    
    &:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
    }
  }

  /* Style active point */
  .active {
    .timeline-item-title {
      background: #8855ff !important;
      color: white !important;
    }
  }

  /* Timeline line style */
  .timeline-vertical-circle {
    &::before {
      background: #e2e8f0 !important;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #8855ff;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #6633cc;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .timeline-controls {
      position: sticky;
      top: 0;
      z-index: 10;
    }
  }
`;