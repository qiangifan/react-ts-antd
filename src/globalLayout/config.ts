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
    }, {
        path: "/form",
        title: "表单",
        children: [
            {
                path: '/from/batchadd',
                title: "批量新增"
            } 
        ]
    }, {
        path: "/modal",
        title: "弹窗",
        children: [
            {
                path: '/modal/common',
                title: "常用弹窗"
            } 
        ]
    }
];