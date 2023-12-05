import { useEffect } from "react";
import { comment } from "../../data";
import { Timeline } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { text } from "../../utils";

const Comment = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
    })
    return (
        <section className='w-full md:h-[35rem] flexCenter  flex flex-col md:flex-row px-4 py-4 gap-10 md:py-20 md:padding-container'>
            <div className="c">
                <div data-aos="zoom-in" className={"w-[95%] flex flex-col flexCenter  gap-5 mt-5 md:mt-0"} >
                    <div>
                        <h2 className="bold-18 md:bold-32">{text("commentTitle")}</h2>
                        <span className="flex mt-2"><hr className="w-32 h-2 bg-rouge" /><hr className="w-32 h-2 bg-secondary-dark-bg" /></span>
                    </div>

                    {
                        comment.map((item) => (
                            item?.detail?.map((it) => (
                                <>
                                    <p className="bold-18">{text("detailSub")}</p>
                                    <Timeline items={it.resume} style={{ fontSize: '18px' }} className="md:flexCenter md:gap-5  regular-14 md:regular-16 3xl:regular-32" />
                                </>
                            ))


                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default Comment