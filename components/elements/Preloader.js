
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">x</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="G" className="letters-loading">
                                G
                            </span>
                            <span data-text-preloader="K" className="letters-loading">
                                K
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
