import React from "react";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Annica Witschard",
    role: "Tổng Giám Đốc",
    imageUrl: "https://www.homecredit.vn/upload/Artboard_2_2fa759fa84.png",
  },
  {
    name: "Michal Skalicky",
    role: "Giám đốc Quan hệ Khách hàng",
    imageUrl: "https://www.homecredit.vn/upload/Artboard_9_f0116d9ea2.png",
  },
  {
    name: "Nguyễn Phước Bảo Dung",
    role: "Giám đốc Tiếp thị",
    imageUrl: "https://www.homecredit.vn/upload/Artboard_4_1a43bef2ff.png",
  },
  {
    name: "Pham Ngoc Khang",
    role: "Giám đốc Tài chính",
    imageUrl: "https://www.homecredit.vn/upload/Artboard_6_ec2d56c6b1.png",
  },
  {
    name: "Alexis Phạm",
    role: "Giám đốc Nhân sự",
    imageUrl: "https://www.homecredit.vn/upload/Artboard_1_6a33f560c0.png",
  },
  {
    name: "Fabien Sanchez",
    role: "Giám đốc Quản lý Mạng lưới Bán Hàng Toàn quốc",
    imageUrl: "https://www.homecredit.vn/upload/Artboard_5_f725f599c7.png",
  },
  {
    name: "Trần Mạnh Đức",
    role: "Giám đốc Pháp chế và Tuân thủ",
    imageUrl: "https://www.homecredit.vn/upload/Artboard_3_1fb30628eb.png",
  },
  {
    name: "Peter Zajic",
    role: "Giám đốc Công nghệ Thông tin",
    imageUrl: "https://www.homecredit.vn/upload/Artboard_8_d0750de84c.png",
  },
];

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://www.homecredit.vn/upload/Artboard_2_2fa759fa84.png",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      href: "#",
      imageUrl: "https://www.homecredit.vn/upload/Artboard_9_f0116d9ea2.png",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      href: "#",
      imageUrl: "https://www.homecredit.vn/upload/Artboard_3_1fb30628eb.png",
    },
  },
];

const Home = () => {
  return (
    <div className="relative isolate px-6 pt-20 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e31e33] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="flex flex-col gap-y-24 sm:gap-y-32">
        <div className="mx-auto max-w-2xl sm:py-16 lg:py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Bảo vệ sức khỏe đến 150 triệu{" "}
              <a href="#" className="font-semibold text-red-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Đăng ký ngay <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
              Bảo vệ sức khỏe lên đến 150 triệu
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="#"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Bắt đầu ngay
              </Link>
              <Link
                to="#"
                className="text-sm font-semibold leading-6 text-gray-900 "
              >
                Tìm hiểu <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-lg text-center font-semibold leading-8 text-gray-900">
            Đối tác của Home Credit
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 h-max-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transitor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 h-max-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 h-max-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 h-max-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="Savvycal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 h-max-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2wl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ban điều hành
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Với cam kết mạnh mẽ về phát triển bền vững, Home Credit giúp người
              tiêu dùng làm chủ cuộc sống, sống vui như mong đợi, thúc đẩy những
              thay đổi tích cực và đóng góp vào sự phát triển của nền kinh tế
              Việt Nam.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    src={person.imageUrl}
                    alt=""
                    className="h-20 w-20 rounded-full lg:h-24 lg:w-24"
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-red-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-sx">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    to={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={post.href}>{post.title}</Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-600">
                      <Link to={post.author.href}>{post.author.name}</Link>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e31e33] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default Home;
