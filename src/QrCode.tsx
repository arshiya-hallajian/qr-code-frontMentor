interface QrCodeProps {
    img: string
}

const QrCode = ({img} : QrCodeProps) => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-light-gray">
            <div className="bg-white p-3 w-10/12 md:w-64 h-auto rounded-xl flex-col pb-10 md:pb-7 shadow-2xl">
                <img src={img} className="rounded-lg" alt=""/>
                <h1 className="font-specimen font-black text-dark-blue text-center text-[18.2px] px-4 md:text-[14px] md:px-3 md:leading-6 mt-6">
                    Improve your front-end skills by building projects
                </h1>
                <p className="text-center text-[16.2px] md:text-[12px] px-3 font-normal font-specimen text-grayish-blue leading-4 mt-4 md:mt-3 ">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    );
};


export default QrCode