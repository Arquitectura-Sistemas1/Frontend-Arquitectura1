(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend-arquitectura/app/Admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-arquitectura/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const datosIngresosMensuales = [
    {
        mes: 'Ene',
        ventas: 12400,
        rentas: 2100
    },
    {
        mes: 'Feb',
        ventas: 15300,
        rentas: 2800
    },
    {
        mes: 'Mar',
        ventas: 18100,
        rentas: 3200
    },
    {
        mes: 'Abr',
        ventas: 14200,
        rentas: 2900
    },
    {
        mes: 'May',
        ventas: 21000,
        rentas: 3800
    },
    {
        mes: 'Jun',
        ventas: 19500,
        rentas: 3500
    },
    {
        mes: 'Jul',
        ventas: 22800,
        rentas: 4000
    },
    {
        mes: 'Ago',
        ventas: 24850,
        rentas: 4120
    }
];
const datosCategorias = [
    {
        categoria: 'Acción',
        ventas: 45,
        rentas: 28
    },
    {
        categoria: 'RPGs',
        ventas: 32,
        rentas: 15
    },
    {
        categoria: 'Deportes',
        ventas: 28,
        rentas: 40
    },
    {
        categoria: 'Estrategia',
        ventas: 18,
        rentas: 10
    },
    {
        categoria: 'Aventura',
        ventas: 38,
        rentas: 22
    }
];
function AdminDashboard() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('estadisticas');
    const [clientes, setClientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [transacciones, setTransacciones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // ESTADO PARA EL FILTRO DENTRO DE TRANSACCIONES
    const [filtroTipoTransaccion, setFiltroTipoTransaccion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('TODAS');
    const [empleados, setEmpleados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            nombres: 'Marcos',
            apellidos: 'Solís',
            cui: '2540123450101',
            usuario: 'msolis',
            contrasena: '••••••••',
            correo: 'marcos@nexus.com',
            telefono: '55551234',
            rol_id: 2,
            estado: 'ACTIVO'
        },
        {
            id: 2,
            nombres: 'Lucía',
            apellidos: 'Gómez',
            cui: '1890987650101',
            usuario: 'lgomez',
            contrasena: '••••••••',
            correo: 'lucia@nexus.com',
            telefono: '44445555',
            rol_id: 1,
            estado: 'ACTIVO'
        },
        {
            id: 3,
            nombres: 'Roberto',
            apellidos: 'Cano',
            cui: '3010456780101',
            usuario: 'rcano',
            contrasena: '••••••••',
            correo: 'roberto@nexus.com',
            telefono: '33332222',
            rol_id: 3,
            estado: 'ARCHIVADO'
        }
    ]);
    const [busquedaEmpleado, setBusquedaEmpleado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [empleadoEditando, setEmpleadoEditando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nombres: '',
        apellidos: '',
        cui: '',
        usuario: '',
        contrasena: '',
        correo: '',
        telefono: '',
        rol_id: 1
    });
    const API_URL = 'http://localhost:8080/api';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            const cargarDatos = {
                "AdminDashboard.useEffect.cargarDatos": async ()=>{
                    try {
                        setLoading(true);
                        const [resClientes, resTransacciones] = await Promise.all([
                            fetch(`${API_URL}/clientes`),
                            fetch(`${API_URL}/transacciones`)
                        ]);
                        if (!resClientes.ok || !resTransacciones.ok) {
                            throw new Error('API no disponible');
                        }
                        const dataClientes = await resClientes.json();
                        const dataTransacciones = await resTransacciones.json();
                        setClientes(dataClientes);
                        setTransacciones(dataTransacciones);
                    } catch (err) {
                        setClientes([
                            {
                                id: 1,
                                nombre: 'Carlos López',
                                correo: 'carlos@gmail.com',
                                estado: 'ACTIVO',
                                comprasRealizadas: 5
                            },
                            {
                                id: 2,
                                nombre: 'Ana Martínez',
                                correo: 'ana.m@gmail.com',
                                estado: 'ACTIVO',
                                comprasRealizadas: 12
                            },
                            {
                                id: 3,
                                nombre: 'Juan Pérez',
                                correo: 'juanp@gmail.com',
                                estado: 'SUSPENDIDO',
                                comprasRealizadas: 1
                            }
                        ]);
                        setTransacciones([
                            {
                                id: 'TX-1001',
                                cliente: 'Carlos López',
                                tipo: 'VENTA',
                                juego: 'Call of Duty: Modern Warfare',
                                monto: 350.00,
                                fecha: '2026-08-25',
                                estado: 'COMPLETADO'
                            },
                            {
                                id: 'TX-1002',
                                cliente: 'Ana Martínez',
                                tipo: 'RENTA',
                                juego: 'Helldivers 2',
                                monto: 45.00,
                                fecha: '2026-08-26',
                                estado: 'COMPLETADO'
                            },
                            {
                                id: 'TX-1003',
                                cliente: 'Juan Pérez',
                                tipo: 'VENTA',
                                juego: 'Roblox Gift Card',
                                monto: 100.00,
                                fecha: '2026-08-27',
                                estado: 'PENDIENTE'
                            },
                            {
                                id: 'TX-1004',
                                cliente: 'Carlos López',
                                tipo: 'RENTA',
                                juego: 'EA Sports FC 25',
                                monto: 60.00,
                                fecha: '2026-08-28',
                                estado: 'COMPLETADO'
                            }
                        ]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminDashboard.useEffect.cargarDatos"];
            cargarDatos();
        }
    }["AdminDashboard.useEffect"], []);
    // CRUD DE EMPLEADOS
    const abrirModalCrear = ()=>{
        setEmpleadoEditando(null);
        setFormData({
            nombres: '',
            apellidos: '',
            cui: '',
            usuario: '',
            contrasena: '',
            correo: '',
            telefono: '',
            rol_id: 1
        });
        setIsModalOpen(true);
    };
    const abrirModalEditar = (emp)=>{
        setEmpleadoEditando(emp);
        setFormData({
            nombres: emp.nombres,
            apellidos: emp.apellidos,
            cui: emp.cui,
            usuario: emp.usuario,
            contrasena: emp.contrasena,
            correo: emp.correo,
            telefono: emp.telefono,
            rol_id: emp.rol_id
        });
        setIsModalOpen(true);
    };
    const guardarEmpleado = (e)=>{
        e.preventDefault();
        if (!formData.nombres || !formData.apellidos || !formData.correo || !formData.usuario) return;
        if (empleadoEditando) {
            setEmpleados(empleados.map((emp)=>emp.id === empleadoEditando.id ? {
                    ...emp,
                    ...formData,
                    rol_id: Number(formData.rol_id)
                } : emp));
        } else {
            const nuevoEmpleado = {
                id: empleados.length > 0 ? Math.max(...empleados.map((e)=>e.id)) + 1 : 1,
                ...formData,
                rol_id: Number(formData.rol_id),
                estado: 'ACTIVO'
            };
            setEmpleados([
                ...empleados,
                nuevoEmpleado
            ]);
        }
        setIsModalOpen(false);
    };
    const alternarEstadoEmpleado = (id)=>{
        setEmpleados(empleados.map((emp)=>{
            if (emp.id === id) {
                return {
                    ...emp,
                    estado: emp.estado === 'ACTIVO' ? 'ARCHIVADO' : 'ACTIVO'
                };
            }
            return emp;
        }));
    };
    const obtenerNombreRol = (rol_id)=>{
        switch(rol_id){
            case 1:
                return 'Admin';
            case 2:
                return 'Soporte';
            case 3:
                return 'Inventario';
            default:
                return 'Sin Rol';
        }
    };
    const empleadosFiltrados = empleados.filter((e)=>e.nombres.toLowerCase().includes(busquedaEmpleado.toLowerCase()) || e.apellidos.toLowerCase().includes(busquedaEmpleado.toLowerCase()) || e.usuario.toLowerCase().includes(busquedaEmpleado.toLowerCase()) || e.correo.toLowerCase().includes(busquedaEmpleado.toLowerCase()) || e.cui.includes(busquedaEmpleado));
    // FILTRADO Y CÁLCULOS DE TRANSACCIONES
    const transaccionesFiltradas = transacciones.filter((tx)=>{
        if (filtroTipoTransaccion === 'TODAS') return true;
        return tx.tipo === filtroTipoTransaccion;
    });
    const totalVentas = transacciones.filter((t)=>t.tipo === 'VENTA').reduce((acc, t)=>acc + t.monto, 0);
    const totalRentas = transacciones.filter((t)=>t.tipo === 'RENTA').reduce((acc, t)=>acc + t.monto, 0);
    const descargarReportePDF = async (tipoReporte)=>{
        try {
            alert(`Iniciando descarga del reporte PDF: ${tipoReporte}`);
        } catch (error) {
            console.error("Error al descargar el PDF:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-slate-950 text-slate-100 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.png",
                                    alt: "Nexus Games Logo",
                                    className: "h-24 w-auto object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('estadisticas'),
                                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${activeTab === 'estadisticas' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'}`,
                                        children: "📊 Panel Estadísticas"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('clientes'),
                                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${activeTab === 'clientes' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'}`,
                                        children: "👥 Gestión Cliente"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('empleados'),
                                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${activeTab === 'empleados' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'}`,
                                        children: "👔 Gestión Empleados"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('transacciones'),
                                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${activeTab === 'transacciones' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'}`,
                                        children: "💳 Historial Transacciones"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('reportes'),
                                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${activeTab === 'reportes' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'}`,
                                        children: "📑 Panel de Reportes"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-800 pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold text-slate-200",
                            children: "Rol: Administrador"
                        }, void 0, false, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto p-8 bg-slate-950",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-64 items-center justify-center text-slate-400 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5 h-5 border-2 border-lime-400 border-t-transparent rounded-full animate-spin mr-3"
                        }, void 0, false, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this),
                        "Cargando interfaz..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                    lineNumber: 342,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        activeTab === 'estadisticas' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white",
                                            children: "Panel de Estadísticas Globales"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-sm",
                                            children: "Resumen de ingresos, actividad y métricas clave del sistema."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 rounded-xl p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold uppercase text-slate-400",
                                                    children: "Ventas Totales"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-extrabold text-lime-400 mt-2",
                                                    children: "Q 24,850.00"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 357,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 rounded-xl p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold uppercase text-slate-400",
                                                    children: "Ingresos por Rentas"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-extrabold text-purple-400 mt-2",
                                                    children: "Q 4,120.00"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 rounded-xl p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold uppercase text-slate-400",
                                                    children: "Clientes Activos"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-extrabold text-blue-400 mt-2",
                                                    children: clientes.length
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 rounded-xl p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold uppercase text-slate-400",
                                                    children: "Rentabilidad"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-extrabold text-amber-400 mt-2",
                                                    children: "88.5%"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-white text-base",
                                                            children: "Tendencia de Ingresos Mensuales"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400 text-xs",
                                                            children: "Comparativa entre ventas directas e ingresos por rentas (Q)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-72 w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: "100%",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                                            data: datosIngresosMensuales,
                                                            margin: {
                                                                top: 10,
                                                                right: 10,
                                                                left: -20,
                                                                bottom: 0
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                            id: "colorVentas",
                                                                            x1: "0",
                                                                            y1: "0",
                                                                            x2: "0",
                                                                            y2: "1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "5%",
                                                                                    stopColor: "#a3e635",
                                                                                    stopOpacity: 0.8
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                                    lineNumber: 386,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "95%",
                                                                                    stopColor: "#a3e635",
                                                                                    stopOpacity: 0
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                                    lineNumber: 387,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                            id: "colorRentas",
                                                                            x1: "0",
                                                                            y1: "0",
                                                                            x2: "0",
                                                                            y2: "1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "5%",
                                                                                    stopColor: "#c084fc",
                                                                                    stopOpacity: 0.8
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                                    lineNumber: 390,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "95%",
                                                                                    stopColor: "#c084fc",
                                                                                    stopOpacity: 0
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                                    lineNumber: 391,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                            lineNumber: 389,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                    strokeDasharray: "3 3",
                                                                    stroke: "#334155"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 394,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    dataKey: "mes",
                                                                    stroke: "#94a3b8",
                                                                    fontSize: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                    stroke: "#94a3b8",
                                                                    fontSize: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    contentStyle: {
                                                                        backgroundColor: '#0f172a',
                                                                        borderColor: '#334155',
                                                                        borderRadius: '8px',
                                                                        color: '#fff'
                                                                    },
                                                                    formatter: (value)=>[
                                                                            `Q ${value}`,
                                                                            ''
                                                                        ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                                    type: "monotone",
                                                                    dataKey: "ventas",
                                                                    name: "Ventas",
                                                                    stroke: "#a3e635",
                                                                    fillOpacity: 1,
                                                                    fill: "url(#colorVentas)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                                    type: "monotone",
                                                                    dataKey: "rentas",
                                                                    name: "Rentas",
                                                                    stroke: "#c084fc",
                                                                    fillOpacity: 1,
                                                                    fill: "url(#colorRentas)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-white text-base",
                                                            children: "Operaciones por Categoría de Juego"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400 text-xs",
                                                            children: "Número de unidades vendidas vs. rentadas por género"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-72 w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: "100%",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                            data: datosCategorias,
                                                            margin: {
                                                                top: 10,
                                                                right: 10,
                                                                left: -20,
                                                                bottom: 0
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                    strokeDasharray: "3 3",
                                                                    stroke: "#334155"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    dataKey: "categoria",
                                                                    stroke: "#94a3b8",
                                                                    fontSize: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                    stroke: "#94a3b8",
                                                                    fontSize: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    contentStyle: {
                                                                        backgroundColor: '#0f172a',
                                                                        borderColor: '#334155',
                                                                        borderRadius: '8px',
                                                                        color: '#fff'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                    dataKey: "ventas",
                                                                    name: "Ventas Directas",
                                                                    fill: "#38bdf8",
                                                                    radius: [
                                                                        4,
                                                                        4,
                                                                        0,
                                                                        0
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                    dataKey: "rentas",
                                                                    name: "Rentas de Juegos",
                                                                    fill: "#f59e0b",
                                                                    radius: [
                                                                        4,
                                                                        4,
                                                                        0,
                                                                        0
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 425,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 350,
                            columnNumber: 15
                        }, this),
                        activeTab === 'clientes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white",
                                    children: "Gestión de Clientes"
                                }, void 0, false, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 437,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left text-sm text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-slate-800/60 text-slate-400 uppercase text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Nombre"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Correo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Estado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-800",
                                                children: clientes.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: [
                                                                    "#",
                                                                    c.id
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 font-medium text-white",
                                                                children: c.nombre
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: c.correo
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-1 rounded text-xs bg-lime-400/10 text-lime-400",
                                                                    children: c.estado
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, c.id, true, {
                                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 436,
                            columnNumber: 15
                        }, this),
                        activeTab === 'empleados' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-white",
                                                    children: "Gestión de Empleados"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs",
                                                    children: "Administra las cuentas de los colaboradores de Nexus Games."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Buscar empleado...",
                                                    value: busquedaEmpleado,
                                                    onChange: (e)=>setBusquedaEmpleado(e.target.value),
                                                    className: "bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 w-48"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: abrirModalCrear,
                                                    className: "bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition",
                                                    children: "+ Agregar Empleado"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 470,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left text-sm text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-slate-800/60 text-slate-400 uppercase text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Nombres"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Apellidos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Cui"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Usuario"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Contraseña"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Correo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Telefono"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Rol"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Estado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4 text-center",
                                                            children: "Acciones"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-800",
                                                children: empleadosFiltrados.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-slate-800/40",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: [
                                                                    "#",
                                                                    emp.id
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 font-medium text-white",
                                                                children: emp.nombres
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 font-medium text-white",
                                                                children: emp.apellidos
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-slate-400",
                                                                children: emp.cui
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-purple-400 font-medium",
                                                                children: [
                                                                    "@",
                                                                    emp.usuario
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-slate-500 font-mono",
                                                                children: "••••••••"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-slate-400",
                                                                children: emp.correo
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-slate-400",
                                                                children: emp.telefono
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 font-semibold text-purple-300",
                                                                children: obtenerNombreRol(emp.rol_id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 521,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-1 rounded text-xs font-semibold ${emp.estado === 'ACTIVO' ? 'bg-lime-400/10 text-lime-400' : 'bg-red-400/10 text-red-400'}`,
                                                                    children: emp.estado
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 523,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 522,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 flex justify-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>abrirModalEditar(emp),
                                                                        className: "px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition",
                                                                        children: "Editar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>alternarEstadoEmpleado(emp.id),
                                                                        className: `px-3 py-1 text-xs rounded-lg transition ${emp.estado === 'ACTIVO' ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400' : 'bg-lime-500/10 hover:bg-lime-500/20 text-lime-400'}`,
                                                                        children: emp.estado === 'ACTIVO' ? 'Archivar' : 'Activar'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                        lineNumber: 536,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 529,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, emp.id, true, {
                                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                        lineNumber: 494,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 469,
                            columnNumber: 15
                        }, this),
                        activeTab === 'transacciones' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-white",
                                                    children: "Historial Global de Transacciones"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs",
                                                    children: "Filtra y revisa las compras directas y alquileres de la plataforma."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex bg-slate-900 border border-slate-800 p-1 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setFiltroTipoTransaccion('TODAS'),
                                                    className: `px-3 py-1.5 text-xs font-semibold rounded-lg transition ${filtroTipoTransaccion === 'TODAS' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`,
                                                    children: [
                                                        "Todas (",
                                                        transacciones.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setFiltroTipoTransaccion('VENTA'),
                                                    className: `px-3 py-1.5 text-xs font-semibold rounded-lg transition ${filtroTipoTransaccion === 'VENTA' ? 'bg-lime-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`,
                                                    children: [
                                                        "Ventas (Q ",
                                                        totalVentas.toFixed(2),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setFiltroTipoTransaccion('RENTA'),
                                                    className: `px-3 py-1.5 text-xs font-semibold rounded-lg transition ${filtroTipoTransaccion === 'RENTA' ? 'bg-purple-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`,
                                                    children: [
                                                        "Rentas (Q ",
                                                        totalRentas.toFixed(2),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 558,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left text-sm text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-slate-800/60 text-slate-400 uppercase text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "ID Transacción"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Cliente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Juego"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Tipo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 606,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Fecha"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 607,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Estado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4 text-right",
                                                            children: "Monto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                lineNumber: 601,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-800",
                                                children: transaccionesFiltradas.length > 0 ? transaccionesFiltradas.map((tx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-slate-800/30 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 font-mono text-xs text-slate-400",
                                                                children: tx.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 font-medium text-white",
                                                                children: tx.cliente
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-slate-300",
                                                                children: tx.juego
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider ${tx.tipo === 'VENTA' ? 'bg-lime-400/10 text-lime-400 border border-lime-400/20' : 'bg-purple-400/10 text-purple-300 border border-purple-400/20'}`,
                                                                    children: tx.tipo
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 619,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-xs text-slate-400",
                                                                children: tx.fecha
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 630,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded",
                                                                    children: tx.estado
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                    lineNumber: 632,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-right font-bold text-white",
                                                                children: [
                                                                    "Q ",
                                                                    tx.monto.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                                lineNumber: 636,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, tx.id, true, {
                                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 27
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 7,
                                                        className: "p-8 text-center text-slate-500 text-sm",
                                                        children: "No se encontraron transacciones del tipo seleccionado."
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                lineNumber: 612,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 557,
                            columnNumber: 15
                        }, this),
                        activeTab === 'reportes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white",
                                    children: "Panel de Reportes"
                                }, void 0, false, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 657,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-white text-lg",
                                                            children: "Reporte Financiero"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400 text-xs mt-1",
                                                            children: "Resumen general de ingresos, rentas y ventas acumuladas."
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>descargarReportePDF('Financiero'),
                                                    className: "mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg text-xs font-bold transition",
                                                    children: "Exportar PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 659,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-white text-lg",
                                                            children: "Reporte de Clientes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 674,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400 text-xs mt-1",
                                                            children: "Listado detallado de actividad y estado de usuarios registrados."
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 675,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>descargarReportePDF('Clientes'),
                                                    className: "mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg text-xs font-bold transition",
                                                    children: "Exportar PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 672,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 658,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 656,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                    lineNumber: 347,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-white",
                            children: empleadoEditando ? 'Editar Empleado' : 'Agregar Nuevo Empleado'
                        }, void 0, false, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 695,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: guardarEmpleado,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-400 mb-1",
                                                    children: "Nombres"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: formData.nombres,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            nombres: e.target.value
                                                        }),
                                                    placeholder: "ej. Juan Carlos",
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 703,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 701,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-400 mb-1",
                                                    children: "Apellidos"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 714,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: formData.apellidos,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            apellidos: e.target.value
                                                        }),
                                                    placeholder: "ej. Pérez Gómez",
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 713,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-400 mb-1",
                                                    children: "CUI / DPI"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: formData.cui,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            cui: e.target.value
                                                        }),
                                                    placeholder: "ej. 2540123450101",
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 725,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-400 mb-1",
                                                    children: "Teléfono"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    required: true,
                                                    value: formData.telefono,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            telefono: e.target.value
                                                        }),
                                                    placeholder: "ej. 55554444",
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 737,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-400 mb-1",
                                                    children: "Correo Electrónico"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    required: true,
                                                    value: formData.correo,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            correo: e.target.value
                                                        }),
                                                    placeholder: "ej. juan@nexusgames.com",
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 749,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-400 mb-1",
                                                    children: "Usuario"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: formData.usuario,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            usuario: e.target.value
                                                        }),
                                                    placeholder: "ej. jperez",
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-400 mb-1",
                                                    children: "Contraseña"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    required: true,
                                                    value: formData.contrasena,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            contrasena: e.target.value
                                                        }),
                                                    placeholder: "••••••••",
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 773,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-400 mb-1",
                                                    children: "Rol Asignado"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.rol_id,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            rol_id: Number(e.target.value)
                                                        }),
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 1,
                                                            children: "1. Admin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 2,
                                                            children: "2. Soporte"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 793,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 3,
                                                            children: "3. Inventario"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                            lineNumber: 794,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                                    lineNumber: 787,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 785,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 700,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 pt-4 border-t border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition",
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 800,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$arquitectura$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold transition",
                                            children: empleadoEditando ? 'Guardar Cambios' : 'Crear Empleado'
                                        }, void 0, false, {
                                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                            lineNumber: 807,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                                    lineNumber: 799,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                            lineNumber: 699,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                    lineNumber: 694,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
                lineNumber: 693,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend-arquitectura/app/Admin/page.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
_s(AdminDashboard, "46I/gepCCMxQ2eDkg86bMbZh9BA=");
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend-arquitectura_app_Admin_page_tsx_0ugpi7o._.js.map