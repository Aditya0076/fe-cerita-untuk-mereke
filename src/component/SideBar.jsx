import { Sidebar } from "flowbite-react";
import {
  BsPerson,
  BsBook,
  BsGear,
  BsBoxArrowInRight,
  BsEye,
  BsPencil,
  BsUnlock,
  BsPalette,
} from "react-icons/bs";
import { HiChartPie } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { TbAlignBoxLeftStretch } from "react-icons/tb";

const SideBar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="h-screen w-64 bg-slate-900">
      <Sidebar aria-label="Sidebar with content">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Collapse
              icon={BsPerson}
              label="Orphanages Data"
              initialState="collapsed"
            >
              <Sidebar.Item href="#" icon={BsBoxArrowInRight}>
                Create Orphanage
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={TbAlignBoxLeftStretch}>
                Edit Orphanage
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BsEye}>
                View Orphanage
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              icon={BsBook}
              label="Book Data"
              initialState="collapsed"
            >
              <Sidebar.Item href="#" icon={BsBoxArrowInRight}>
                Create Book
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={TbAlignBoxLeftStretch}>
                Edit Book
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BsPencil}>
                Request Book
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BsEye}>
                View Book
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              icon={BsPerson}
              label="Donatur Data"
              initialState="collapsed"
            >
              <Sidebar.Item href="#" icon={BsBoxArrowInRight}>
                Create Donatur
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={TbAlignBoxLeftStretch}>
                Edit Donatur
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BsEye}>
                View Donatur Data
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              icon={BsGear}
              label="Setting"
              initialState="collapsed"
            >
              <Sidebar.Item href="#" icon={BsUnlock}>
                Password Setting
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BsPalette}>
                Thema Setting
              </Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        {isAuthenticated && (
          <Sidebar.Item>
            <div className="fixed bottom-0 left-0 w-64 p-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </div>
          </Sidebar.Item>
        )}
      </Sidebar>
    </div>
  );
};

export default SideBar;
