
const Costumors =()=>{
    let costomerImg=["Cimg/Logo-1.png",
    "Cimg/Logo-2.png",
    "Cimg/Logo-3.png",
    "Cimg/Logo-4.png",
    "Cimg/Logo-5.png",
    "Cimg/Logo-6.png",
    "Cimg/Logo-7.png",
    "Cimg/Logo-8.png",
    "Cimg/Logo-9.png",
    "Cimg/Logo-10.png"];
    return<>
       <article>
            <div className="mainCostomer py-3">
                <div className="">
                    <div className="text-center p-3">
                        <h2><strong>OUR DISCERNING CUSTOMERS</strong></h2>
                    </div>
                    <div className="Cbox d-flex flex-wrap">
                       {
                        costomerImg.map((val)=>{
                            return(
                                <div className="CimgBox m-1 ">
                                     <img src={val} className="w-100"/>
                                </div>
                            )
                        })
                       }
                    </div>
                </div>
            </div>
       </article>
    </>
}

export default Costumors;