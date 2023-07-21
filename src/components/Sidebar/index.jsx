import GroupMenu from "./GroupMenu";

const groupMenus = [
    {
        main: {
            iconClassname: "fa-solid fa-clipboard",
            text: "Danh sách bệnh viện",
            link: "/",
        },
        children: [
            {
                iconClassname: "fa-solid fa-list",
                text: "BV Bệnh Nhiệt đới",
                link: "/",
            },
            {
                iconClassname: "fa-solid fa-circle-plus",
                text: "BV Lê Văn Thịnh",
                link: "/",
            },
            {
                iconClassname: "fa-solid fa-circle-plus",
                text: "BV Tân Phú",
                link: "/",
            },
            {
                iconClassname: "fa-solid fa-table",
                text: "BV Nhân Dân 115",
                link: "/",
            },
            {
                iconClassname: "fa-solid fa-table",
                text: "BV Nhi Đồng 2",
                link: "/",
            },
        ],
    },
    {
        main: {
            iconClassname: "fa-solid fa-box-open",
            text: "Ngân hàng liên kết",
            link: "/",
        },
        children: [
            {
                iconClassname: "fa-solid fa-list",
                text: "SaigonBank",
                link: "/",
            },
        ],
    },
];

function Sidebar() {
    return (
        <div className="flex h-auto min-w-[240px] flex-col ">
            <div className="flex select-none flex-col space-y-0.5  " style={{ overflowY: "overlay" }}>
                {groupMenus.map((groupMenu, index) => (
                    <GroupMenu key={index} groupMenu={groupMenu} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
