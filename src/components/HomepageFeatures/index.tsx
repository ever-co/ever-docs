import type { JSX, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string; 
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Powered by React',
    image: require('@site/static/img/image.png').default, 
    description: (
      <>
         The Everything Platform for Businesses™
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--13')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        {/* <Heading as="h3">{title}</Heading> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}