import React from 'react'
import './works.css'

const Works = () => {
    return (
        <section id='works'>
            <div className='worksTitle'>Experiences</div>
            <div className='worksDesc'>
                <img src={process.env.PUBLIC_URL + '/assets/workImg.png'} alt='workImage' width={70} />
                <h2>Web Developer</h2>
            </div>
            <ul>
                <li>Proactively liaised with the design team and project team to ensure efficient and timly delivery of significant projects.</li>
                <li>Designrd and Developed web application using javascript frameworks ReactJs and AngularJs to increase tarrget audience engagement by 12%.</li>
                <li>Created accessible,responsive,and functional user interfaces to allow visitors on any device to have the same perfect user expeirence.  </li>
            </ul>

            <div className='worksImgs'>
                <div className="w-full rounded-lg shadow-md lg:max-w-sm worksImg">
                    <img
                        className="object-cover w-full h-48"
                        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                        alt="images"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            React Tailwind Card with Image
                        </h4>
                        <p className="mb-2 leading-normal">
                            react tailwind css card with image It is a long established
                            fact that a reader will be distracted by the readable
                            content.
                        </p>
                        {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button> */}
                    </div>
                </div>
                <div className="w-full rounded-lg shadow-md lg:max-w-sm worksImg">
                    <img
                        className="object-cover w-full h-48"
                        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                        alt="images"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            React Tailwind Card with Image
                        </h4>
                        <p className="mb-2 leading-normal">
                            react tailwind css card with image It is a long established
                            fact that a reader will be distracted by the readable
                            content.
                        </p>
                        {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button> */}
                    </div>
                </div>
                <div className="w-full rounded-lg shadow-md lg:max-w-sm worksImg">
                    <img
                        className="object-cover w-full h-48"
                        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                        alt="images"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            React Tailwind Card with Image
                        </h4>
                        <p className="mb-2 leading-normal">
                            react tailwind css card with image It is a long established
                            fact that a reader will be distracted by the readable
                            content.
                        </p>
                        {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works