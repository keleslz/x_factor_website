import {useSpring} from "react-spring";
import {animated} from "react-spring";

const SpringCarousselAuto = ({children, className, from, to , duration = 30_000, addStyles }) => {
   const styles = useSpring({
      from: { x: from },
      to: { x:  to},
      loop: { reverse: true },
      config: { duration: duration },
      reset: true,
      onRest : () => console.log('to end')
   })

   return <animated.div
   style={{
      ...addStyles,
      ...styles,
      width: 'maxContent',
   }}
   className={className}
   >{children}</animated.div>
}

export default SpringCarousselAuto;
