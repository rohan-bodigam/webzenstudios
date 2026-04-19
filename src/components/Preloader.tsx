import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

type Props = {
    setLoading: (value: boolean) => void;
};

const Preloader = ({ setLoading }: Props) => {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    const text = "WEBZEN";

    useEffect(() => {
        console.log("letters refs:", lettersRef.current); // ← add this
    console.log("length:", lettersRef.current.length);
        const tl = gsap.timeline({
            onComplete: () => {
                setLoading(false);
            },
        });

       tl.fromTo(lettersRef.current, 
    {
        y: -120,
        opacity: 0,  // ← start state
    },
    {
        y: 0,
        opacity: 1,  // ← end state explicitly set
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
    }
);


        tl.to(lettersRef.current, {
            scale: 1.1,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
        });
    }, [setLoading]);

    

    return (
        <div className="preloader">
            {text.split("").map((letter, index) => (
                <div className="letter-wrapper" key={index}>  {/* ← wrapper clips each letter */}
                    <span
                        ref={(el) => {
                            if (el) lettersRef.current[index] = el;
                        }}
                        className="letter"
                    >
                        {letter}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Preloader;