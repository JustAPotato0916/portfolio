import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';

const ScrollToTopButton = () => {
  const [isShow, setIsShow] = useState(false);

  const buttonRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY > 0) {
      setIsShow(true);
      buttonRef.current.classList.remove('cursor-default');
      buttonRef.current.classList.remove('pointer-events-none');
    } else {
      setIsShow(false);
      buttonRef.current.classList.add('cursor-default');
      buttonRef.current.classList.add('pointer-events-none');
    }
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(buttonRef.current, {
      opacity: isShow ? 1 : 0,
      duration: 0.5,
    });
  }, [isShow]);

  return (
    <div className="fixed right-12 bottom-16">
      <a
        ref={buttonRef}
        href="#"
        className="border-dark hover:bg-dark flex items-center justify-center rounded-2xl border-2 bg-white p-2 hover:text-white md:p-4"
      >
        <FaArrowUp className="size-5" />
      </a>
    </div>
  );
};
export default ScrollToTopButton;
