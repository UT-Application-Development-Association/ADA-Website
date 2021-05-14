import React from "react";
import Heading from "./Heading";


export default function Footnote(props) {
    return (
        <div className="main-footer">
            <div className="container">
                {/* <div className="row footer-heading">
                    <h3>
                        Connect with Us
                    </h3>
                </div> */}
                <Heading text="联系我们" white="true" />
                <div >
                    <ul className="list-unstyled contact-list">
                        <li>
                            <svg t="1605925844704" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2095">
                                <path d="M570.934673 511.510499c-10.21403 0-20.43106 9.482028-20.43106 21.166062 0 9.484028 10.21403 18.967056 20.43106 18.967056 15.332045 0 26.277077-9.484028 26.277077-18.967056C597.21075 520.997526 586.266718 511.510499 570.934673 511.510499L570.934673 511.510499 570.934673 511.510499 570.934673 511.510499zM503.799476 412.98521c16.057047 0 26.271077-10.21403 26.271077-25.546075 0-16.053047-10.21403-25.541075-26.271077-25.541075-15.328045 0-29.925088 9.488028-29.925088 25.541075C473.874388 402.77518 488.471431 412.98521 503.799476 412.98521L503.799476 412.98521 503.799476 412.98521 503.799476 412.98521zM511.826499 63.943187c-247.385725 0-447.935312 200.545588-447.935312 447.930312 0 247.388725 200.549588 447.934312 447.935312 447.934312 247.384725 0 447.929312-200.545588 447.929312-447.934312C959.755812 264.487775 759.215224 63.943187 511.826499 63.943187L511.826499 63.943187 511.826499 63.943187 511.826499 63.943187zM427.167251 625.362832c-27.003079 0-46.708137-4.379013-72.254212-11.684034l-73.710216 37.225109 21.171062-62.765184c-51.817152-36.481107-82.471242-82.463242-82.471242-138.663406 0-99.251291 93.416274-175.148513 207.265607-175.148513 100.711295 0 190.484558 59.840175 207.998609 144.507423-7.301021-1.470004-13.871041-2.196006-19.706058-2.196006-99.256291 0-175.879515 74.440218-175.879515 164.204481 0 15.328045 2.187006 29.193086 5.835017 43.795128C439.580288 625.362832 433.006269 625.362832 427.167251 625.362832L427.167251 625.362832 427.167251 625.362832 427.167251 625.362832zM731.500143 696.881042l14.592043 52.548154-55.464162-31.380092c-21.163062 4.374013-41.600122 10.945032-62.762184 10.945032-97.795287 0-175.153513-67.141197-175.153513-150.33844 0-83.198244 77.358227-150.33844 175.153513-150.33844 92.686272 0 175.883515 67.141197 175.883515 150.33844C803.749355 625.362832 772.368263 666.957954 731.500143 696.881042L731.500143 696.881042 731.500143 696.881042 731.500143 696.881042zM359.296053 361.89806c-15.328045 0-31.380092 9.488028-31.380092 25.541075 0 15.332045 16.053047 25.551075 31.380092 25.551075 14.597043 0 26.271077-10.21903 26.271077-25.551075C385.56713 371.386088 373.893095 361.89806 359.296053 361.89806L359.296053 361.89806 359.296053 361.89806 359.296053 361.89806zM685.518008 511.510499c-10.945032 0-20.43306 9.482028-20.43306 21.166062 0 9.484028 9.488028 18.967056 20.43306 18.967056 14.596043 0 25.545075-9.484028 25.545075-18.967056C711.063083 520.997526 700.114051 511.510499 685.518008 511.510499L685.518008 511.510499 685.518008 511.510499 685.518008 511.510499zM685.518008 511.510499" p-id="2096">
                                </path>
                            </svg>
                            <span>UT 助手</span>    
                        </li>
                        <li>
                            <svg t="1605925647167" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9276">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m234.7 597.3c0 23.6-19.1 42.7-42.7 42.7H320c-23.6 0-42.7-19.1-42.7-42.7V362.7c0-23.6 19.1-42.7 42.7-42.7h384c23.6 0 42.7 19.1 42.7 42.7v298.6z m-64-298.6H341.3c-11.8 0-21.3 9.6-21.3 21.3v256c0 11.8 9.5 21.3 21.3 21.3h341.3c11.8 0 21.3-9.6 21.3-21.3V384c0.1-11.8-9.4-21.3-21.2-21.3z m-40.6 93.1l-110.8 64c-6.2 3.6-11.6 6.2-19.2 6.2-8.8 0-13.1-2.6-19.2-6.2l-110.9-64c-10.2-5.9-13.7-18.9-7.8-29.1 5.9-10.2 18.9-13.7 29.1-7.8L512 481.6l108.8-62.8c10.2-5.9 23.2-2.4 29.1 7.8 5.9 10.3 2.4 23.3-7.8 29.2zM512 481.6l-2.1 1.2" fill="#000000" p-id="9277">
                                </path>
                            </svg>
                            <span>uoftada@gmail.com</span>    
                        </li>
                        <li>
                            <svg t="1605926044133" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8311">
                                <path d="M32 32zM512 51.2C257.51 51.2 51.2 257.51 51.2 512S257.51 972.8 512 972.8 972.8 766.49 972.8 512 766.49 51.2 512 51.2zM399.2 702.98h-93.3V402.74h93.3v300.24zM351.98 365.9c-29.46 0-48.54-20.94-48.54-46.71 0-26.4 19.62-46.65 49.74-46.65s48.54 20.25 49.11 46.65c0.06 25.83-19.02 46.71-50.31 46.71z m387.96 337.08h-93.27V536.57c0-38.7-13.53-65.04-47.28-65.04-25.77 0-41.1 17.82-47.91 34.98-2.46 6.09-3.06 14.73-3.06 23.28v173.13h-93.36V498.44c0-37.44-1.2-68.79-2.46-95.76h81.03l4.32 41.7h1.83c12.3-19.62 42.39-48.48 92.73-48.48 61.38 0 107.43 41.1 107.43 129.51v177.54z" p-id="8312" fill="#000000" >
                                </path>
                            </svg>
                            <a href="https://www.linkedin.com/company/university-of-toronto-application-development-association/">University of Toronto Application Development Association (UTADA)</a>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
