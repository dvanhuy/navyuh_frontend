import {
  RiHome5Line,
  RiHome5Fill,
  RiAppsLine,
  RiAppsFill
} from 'react-icons/ri';
import { HiOutlineServer,HiServer} from "react-icons/hi";
import { FaRegUser,FaUser  } from "react-icons/fa6";
import { TbCategory,TbCategoryFilled } from "react-icons/tb";
import { MdCategory,MdOutlineCategory } from "react-icons/md";

const menu = [
  {
    displayText: 'Tổng quan',
    path: '/admin/dashboard',
    Icon: RiHome5Line,
    ActiveIcon: RiHome5Fill
  },
  {
    displayText: 'Quản lý máy chủ',
    path: '/admin/servers',
    Icon: HiOutlineServer,
    ActiveIcon: HiServer
  },
  {
    displayText: 'Quản lý người dùng',
    path: '/admin/users',
    Icon: FaRegUser,
    ActiveIcon: FaUser
  },
  {
    displayText: 'Quản lý danh mục',
    path: '/',
    Icon: RiAppsLine,
    ActiveIcon: RiAppsFill,
    childrens: [
      {
        displayText: 'Danh mục lớn',
        path: '/admin/category',
        Icon: TbCategory,
        ActiveIcon: TbCategoryFilled
      },
      {
        displayText: 'Danh mục nhỏ',
        path: '/admin/product',
        Icon: MdOutlineCategory,
        ActiveIcon: MdCategory
      },
    ]
  },
  // {
  //   displayText: 'Quản lý thông tin',
  //   path: '/',
  //   Icon: RiAppsLine,
  //   ActiveIcon: RiAppsFill,
  //   childrens: [
  //     {
  //       displayText: 'Thể loại',
  //       path: '/admin/category',
  //       Icon: VscCircleFilled,
  //       ActiveIcon: VscCircleFilled
  //     },
  //     {
  //       displayText: 'Sản phẩm',
  //       path: '/admin/product',
  //       Icon: VscCircleFilled,
  //       ActiveIcon: VscCircleFilled
  //     },
  //     {
  //       displayText: 'Tài khoản',
  //       path: '/admin/user',
  //       Icon: VscCircleFilled,
  //       ActiveIcon: VscCircleFilled
  //     }
  //   ]
  // },
];

export default menu;