export const menuList = [
    {
        path: "/home",
        title: "首页"
    }, {
        path: "/table",
        title: "表格",
        children: [
            {
                path: "/table/basetable",
                title: "基础表格"
            }, {
                path: '/table/searchtable',
                title: "查询表格"
            }
        ]
    }
];