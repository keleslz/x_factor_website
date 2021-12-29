import {useSpring, animated} from 'react-spring';

const Rotator = ({children}) => {
    const styles = useSpring({
        loop: true,
        from: {rotateZ: 0},
        to: {rotateZ: 360},
        config: { duration: 10_000 },
    })

    return <animated.div
        style={{
            ...styles,
        }}
    >
        {children}
    </animated.div>
}

export default Rotator;

