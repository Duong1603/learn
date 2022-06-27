import React from "react";
import "./detail.css";

export default function Detail() {
  return (
    <div>
      <div className="container">
        <div className="hearder"></div>
        {/* conten */}
        <div className="menu-choose">
          <ul>
            <li>
              <a href="#detial">Thông tin công việc</a>
            </li>
            <li>
              <a href="#news">Công Ty</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="space"></div>
          {/* tiêu đề công việc */}
          <div className="title-job">
            <div className="detai-job">
              <div className="detail-title">
                <h1>Nhân viên nhập liệu </h1>
                <p>Lương: 2500000vnd</p>
                <p>CTTHH Hoa Thuong</p>
                <p>65 Hồ Văn Long phường Bình Hưng Hòa B quận Bình Tân</p>
              </div>
              <div className="detail-image">
                <img
                  src="https://image.thanhnien.vn/900x600/Uploaded/2022/wsxrxqeiod/2019_10_10/trai-cay_boqu.jpg?1"
                  alt=""
                />
              </div>
            </div>
            <hr />
            <h3>Thông tin</h3>
            <p>Chức vụ</p>
            <p>Hình thức làm việc: Toàn thời gian</p>
            <h3>Mô tả công việc</h3>
            <p>
              Nghiên cứu xây dựng content theo yêu cầu , hướng đến khách hàng
              mục tiêu của doanh nghiệp
            </p>
            <p>
              Xây dựng hình ảnh , phát triển nội dung tiktok , lập kế hoạch thực
              hiện chiến lược truyền thông cùng team
            </p>
            <h3>Yêu cầu công việc</h3>
            <p>Độ tuổi từ 18 đến 27. Năng động nhiệt tình với công việc</p>
            <p>Có kiến thức về các trang thương mại điện tử</p>
            <h3>Quyền lợi được hưởng</h3>
            <p>Thời gian làm việc từ 13h đến 21h ( tuần off 1 ngày )</p>
            <p>
              Lương cơ bản 7.000.000 + hỗ trợ xăng 500.000 + chuyên cần 500.000
            </p>
            <p>
              Đến với Yin Group , Công Ty đảm bảo các bạn KHÔNG PHẢI ĐÓNG bất kì
              chi phí nào. Nên cứ mạnh dạn liên hệ mình để trở thành đồng nghiệp
              của nhau nhé!!
            </p>
          </div>
          {/* các công việc có liên quan */}
          <div className="more-job">
            <h2 id="more-job">Công việc liên quan</h2>
            <div className="job">
              <div className="image">
                <img
                  src="https://image.thanhnien.vn/900x600/Uploaded/2022/wsxrxqeiod/2019_10_10/trai-cay_boqu.jpg?1"
                  alt=""
                />
              </div>
              <div className="jobtitle">
                <h4>Trưởng Phòng Trải Nghiệm Khách Hàng</h4>
                <p>Lương:2550000vnd</p>
                <p>BỆNH VIỆN ĐA KHOA HỒNG NGỌC</p>
                <p>Địa điểm làm việc: Hà Nội</p>
              </div>
            </div>
            <div className="job">
              <div className="image">
                <img
                  src="https://image.thanhnien.vn/900x600/Uploaded/2022/wsxrxqeiod/2019_10_10/trai-cay_boqu.jpg?1"
                  alt=""
                />
              </div>
              <div className="jobtitle">
                <h4>Trưởng Phòng Trải Nghiệm Khách Hàng</h4>
                <p>Lương:2550000vnd</p>
                <p>BỆNH VIỆN ĐA KHOA HỒNG NGỌC</p>
                <p>Địa điểm làm việc: Hà Nội</p>
              </div>
            </div>
            <div className="job">
              <div className="image">
                <img
                  src="https://image.thanhnien.vn/900x600/Uploaded/2022/wsxrxqeiod/2019_10_10/trai-cay_boqu.jpg?1"
                  alt=""
                />
              </div>
              <div className="jobtitle">
                <h4>Trưởng Phòng Trải Nghiệm Khách Hàng</h4>
                <p>Lương:2550000vnd</p>
                <p>BỆNH VIỆN ĐA KHOA HỒNG NGỌC</p>
                <p>Địa điểm làm việc: Hà Nội</p>
              </div>
            </div>
            <div className="job">
              <div className="image">
                <img
                  src="https://image.thanhnien.vn/900x600/Uploaded/2022/wsxrxqeiod/2019_10_10/trai-cay_boqu.jpg?1"
                  alt=""
                />
              </div>
              <div className="jobtitle">
                <h4>Trưởng Phòng Trải Nghiệm Khách Hàng</h4>
                <p>Lương:2550000vnd</p>
                <p>BỆNH VIỆN ĐA KHOA HỒNG NGỌC</p>
                <p>Địa điểm làm việc: Hà Nội</p>
              </div>
            </div>
            <div className="job">
              <div className="image">
                <img
                  src="https://image.thanhnien.vn/900x600/Uploaded/2022/wsxrxqeiod/2019_10_10/trai-cay_boqu.jpg?1"
                  alt=""
                />
              </div>
              <div className="jobtitle">
                <h4>Trưởng Phòng Trải Nghiệm Khách Hàng</h4>
                <p>Lương:2550000vnd</p>
                <p>BỆNH VIỆN ĐA KHOA HỒNG NGỌC</p>
                <p>Địa điểm làm việc: Hà Nội</p>
              </div>
            </div>
          </div>
          <div className="space"></div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
