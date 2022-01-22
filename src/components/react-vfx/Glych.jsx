import * as VFX from 'react-vfx';

const Glych = ({children}) => (
    <VFX.VFXProvider>
        {children}
    </VFX.VFXProvider>
);

export default Glych;
