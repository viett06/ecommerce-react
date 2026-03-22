import styles from "./styles.module.scss"
import Button from "@components/Button/Button.jsx"
import useTranslateXImage from '@components/hooks/useTranslateXImage.js';
import { use, useEffect, useRef, useState } from "react";
function SaleHomepage() {
    const { container, title, des, boxBtn, boxImage} = styles;

    const [translateXPosition, setTranslateXPosition] = useState(80);

    const [scrollPosition, setScrollPosition] = useState(0);

    const [scrollDriction, setScrollDrection] = useState(null);

    const previousScrollPossition = useRef(0);

    const scrollTracking = () => {
        const currentScrollPossition = window.pageXOffset;

        if(currentScrollPossition > previousScrollPossition.current){
            setScrollDrection('down')
        }
        else if(currentScrollPossition < previousScrollPossition.current){
            setScrollDrection('up')

        }
    
        previousScrollPossition.current = currentScrollPossition <= 0 ? 0 : currentScrollPossition;

        setScrollPosition(currentScrollPossition);
    };

        useEffect(
            () =>{ window.addEventListener('scroll', scrollTracking);

            return ()=> window.removeEventListener('scroll', scrollTracking);
    }, []);

    const handleTranslateX = () =>{
        if(scrollDriction === 'down'){

        }
    }

    



    return (<div className={container}>
        <div
         className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
        ><img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" 
        alt="" /></div>
        <div>
            <h2 className={title}>Sale of the year</h2>
            <p className={des}>Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.</p>
            <div className={boxBtn}>
                <Button content = {"Read more"} isPrimary={false}/>
            </div>
        </div>
        <div
         className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
        ><img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" /></div>
        </div>)
}

export default SaleHomepage;