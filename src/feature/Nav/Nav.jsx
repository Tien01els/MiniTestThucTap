import React from "react";
import "./Nav.css";
import { useState } from "react";

const Nav = () => {
    const [scrollNav, setScrollNav] = useState(false);
    const handleScrollNav = () => {
        if (window.scrollY > 78) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    window.addEventListener("scroll", handleScrollNav);
    return (
        <div className={scrollNav ? "Nav active" : "Nav"}>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet"></link>
            <nav className="main-nav">
                <ul className="parent">
                    <li className="home">
                        <a href="/#">
                            <i className="ri-home-2-fill"></i>
                        </a>
                    </li>

                    <li className="thoisu">
                        <a href="/#">Thời sự</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Chính trị</a>
                            </li>
                            <li>
                                <a href="/#">Dân sinh</a>
                            </li>
                            <li>
                                <a href="/#">Lao động - Việc làm</a>
                            </li>
                            <li>
                                <a href="/#">Giao thông</a>
                            </li>
                            <li>
                                <a href="/#">Mekong</a>
                            </li>
                            <li>
                                <a href="/#">Quỹ Hy vọng</a>
                            </li>
                        </ul>
                    </li>

                    <li className="gocnhin">
                        <a href="/#">Góc nhìn</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Bình luận nhiều</a>
                            </li>
                            <li>
                                <a href="/#">Covid 19</a>
                            </li>
                            <li>
                                <a href="/#">Chính trị & chính sách</a>
                            </li>
                            <li>
                                <a href="/#">Y tế & sức khỏe</a>
                            </li>
                            <li>
                                <a href="/#">Kinh doanh & quản trị</a>
                            </li>
                            <li>
                                <a href="/#">Giáo dục & tri thức</a>
                            </li>
                            <li>
                                <a href="/#">Môi trường</a>
                            </li>
                            <li>
                                <a href="/#">Văn hóa & lối sống</a>
                            </li>
                            <li>
                                <a href="/#">Tác giả</a>
                            </li>
                        </ul>
                    </li>

                    <li className="thegioi">
                        <a href="/#">Thế giới</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Tư liệu</a>
                            </li>
                            <li>
                                <a href="/#">Phân tích</a>
                            </li>
                            <li>
                                <a href="/#">Người Việt 5 châu</a>
                            </li>
                            <li>
                                <a href="/#">Cuộc sống đó đây</a>
                            </li>
                            <li>
                                <a href="/#">Quân sự</a>
                            </li>
                        </ul>
                    </li>

                    <li className="video">
                        <a href="/#">Video</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Thời sự</a>
                            </li>
                            <li>
                                <a href="/#">Nhịp sống</a>
                            </li>
                            <li>
                                <a href="/#">Ẩm thực</a>
                            </li>
                            <li>
                                <a href="/#">Tôi kể</a>
                            </li>
                            <li>
                                <a href="/#">Chuyện núi rừng</a>
                            </li>
                            <li>
                                <a href="/#">Pháp luật</a>
                            </li>
                            <li>
                                <a href="/#">Giải trí</a>
                            </li>
                            <li>
                                <a href="/#">Thể thao</a>
                            </li>
                            <li>
                                <a href="/#">Sức khoẻ</a>
                            </li>
                        </ul>
                    </li>

                    <li className="kinhdoanh">
                        <a href="/#">Kinh doanh</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Quốc tế</a>
                            </li>
                            <li>
                                <a href="/#">Doanh nghiệp</a>
                            </li>
                            <li>
                                <a href="/#">Chứng khoán</a>
                            </li>
                            <li>
                                <a href="/#">Bất động sản</a>
                            </li>
                            <li>
                                <a href="/#">Bảo hiểm</a>
                            </li>
                            <li>
                                <a href="/#">Hàng hóa</a>
                            </li>
                        </ul>
                    </li>

                    <li className="khoahoc">
                        <a href="/#">Khoa học</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Khoa học trong nước</a>
                            </li>
                            <li>
                                <a href="/#">Tin tức</a>
                            </li>
                            <li>
                                <a href="/#">Phát minh</a>
                            </li>
                            <li>
                                <a href="/#">Ứng dụng</a>
                            </li>
                            <li>
                                <a href="/#">Thế giới tự nhiên</a>
                            </li>
                            <li>
                                <a href="/#">Thường thức</a>
                            </li>
                            <li>
                                <a href="/#">Sáng kiến Khoa học</a>
                            </li>
                        </ul>
                    </li>

                    <li className="giaitri">
                        <a href="/#">Giải trí</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Giới sao</a>
                            </li>
                            <li>
                                <a href="/#">Video</a>
                            </li>
                            <li>
                                <a href="/#">Phim</a>
                            </li>
                            <li>
                                <a href="/#">Nhạc</a>
                            </li>
                            <li>
                                <a href="/#">Thời trang</a>
                            </li>
                            <li>
                                <a href="/#">Làm đẹp</a>
                            </li>
                            <li>
                                <a href="/#">Sách</a>
                            </li>
                            <li>
                                <a href="/#">Sân khấu - Mỹ thuật</a>
                            </li>
                        </ul>
                    </li>

                    <li className="thethao">
                        <a href="/#">Thể thao</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Bóng đá</a>
                            </li>
                            <li>
                                <a href="/#">Tennis</a>
                            </li>
                            <li>
                                <a href="/#">VM 2022</a>
                            </li>
                            <li>
                                <a href="/#">Fun Run</a>
                            </li>
                            <li>
                                <a href="/#">Bundesliga</a>
                            </li>
                            <li>
                                <a href="/#">Các môn khác</a>
                            </li>
                            <li>
                                <a href="/#">Hậu trường</a>
                            </li>
                            <li>
                                <a href="/#">Tường thuật</a>
                            </li>
                        </ul>
                    </li>

                    <li className="phapluat">
                        <a href="/#">Pháp luật</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Hồ sơ phá án</a>
                            </li>
                            <li>
                                <a href="/#">Tư vấn</a>
                            </li>
                        </ul>
                    </li>

                    <li className="giaoduc">
                        <a href="/#">Giáo dục</a>
                        <ul className="sub">
                            <li>
                                <a href="/#">Tin tức</a>
                            </li>
                            <li>
                                <a href="/#">Tuyển sinh</a>
                            </li>
                            <li>
                                <a href="/#">Du học</a>
                            </li>
                            <li>
                                <a href="/#">Học tiếng Anh</a>
                            </li>
                            <li>
                                <a href="/#">Giáo dục 4.0</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
