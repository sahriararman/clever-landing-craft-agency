
import React, { ReactNode } from 'react';
import { LocationData } from '@/data/locationData';

interface LocationTemplateProps {
  locationData: LocationData;
  children: ReactNode;
}

const LocationTemplate = ({ locationData, children }: LocationTemplateProps) => {
  const processText = (text: string): string => {
    return text.replace(/\(Location\)/g, locationData.name);
  };

  const processElement = (element: ReactNode): ReactNode => {
    if (typeof element === 'string') {
      return processText(element);
    }
    
    if (React.isValidElement(element)) {
      const processedChildren = React.Children.map(element.props.children, processElement);
      return React.cloneElement(element, {}, processedChildren);
    }
    
    return element;
  };

  return <>{processElement(children)}</>;
};

export default LocationTemplate;
