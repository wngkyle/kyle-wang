import { Children } from 'react';
import { useTrail, a } from "@react-spring/web";
import autoprefixer from 'autoprefixer';

const Trail = ({ className, children, height }) => {
    const listOfItem = Children.toArray(children);
    const trail = useTrail(listOfItem.length, {
        config: {
            mass: 15,
            tension: 900,
            friction: 100,
        },
        opacity: 1,
        x: 0,
        height: height,
        from: {
            opacity: 0,
            x: 20,
            height: 0,
        }
    })
    return (
        <div>
            {trail.map(({ height }, index) => {
                console.log("height:", height);
                return (
                    <div  key={index}  className={className}>
                        <a.div className="">
                            <a.div style={{ height }}>{listOfItem[index]}</a.div>
                        </a.div>
                    </div>
                )
            })}
        </div>
    )
}

export default Trail;