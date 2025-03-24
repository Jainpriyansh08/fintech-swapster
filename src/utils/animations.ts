
interface AnimationProps {
  initial?: Object;
  animate?: Object;
  exit?: Object;
  transition?: Object;
}

export const fadeIn: AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const fadeInUp: AnimationProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const staggeredChildren = {
  animate: { 
    transition: { 
      staggerChildren: 0.1 
    } 
  }
};

export const slideInRight: AnimationProps = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export const scaleIn: AnimationProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};
