import { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { AiFillHome, AiFillPlusSquare } from "react-icons/ai";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import u from "../media/cpu.png";

