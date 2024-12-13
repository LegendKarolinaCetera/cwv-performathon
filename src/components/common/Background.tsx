import { BackgroundProps } from '../src/shared/types';

const Background = ({ children, hasBackground }: BackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${hasBackground ? 'bg-primary-50 dark:bg-slate-800' : 'bg-transparent'}`}>
      {children}
    </div>
  );
};

export default Background;
