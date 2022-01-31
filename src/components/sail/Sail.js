const Sail = ({children, isHidden = false}) =>
    <div className={`${isHidden ? 'hidden' : ''} `}>
        <div className="inset-0 -z-10 fixed opacity-40 bg-black"></div>

        <div className="inset-0 fixed z-0" >

            <div className="flex center z-40 w-full h-full" style={{ zIndex: 0}}>
                {children}
            </div>
        </div>
    </div>

export default Sail;
