/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/
import dashboard from './dashboard'
import appsAndPages from './apps-and-pages'
import others from './others'
import chartsAndMaps from './charts-and-maps'
import uiElements from './ui-elements'
import formAndTable from './forms-and-table'
import Inicio from './Inicio'
import Combustible from './Combustible'
import Transporte from './Transporte'
import Neumatico from './Neumatico'
import Mantenimiento from './Mantenimiento'
import Finanza from './Finanza'
import Personal from './Personal'
import Asistencia from './Asistencia'
import Logistica from './Logistica' 
import Gestion from './Gestion'
import Ssoma from './Ssoma'
import Gps from './Gps'


// Array of sections
export default [...Inicio,...Personal,...Asistencia,...Finanza,...Transporte,...Combustible,...Mantenimiento,...Neumatico,...Logistica,...Ssoma, ...Gps, ...Gestion, ...others, ...dashboard, ...appsAndPages, ...chartsAndMaps, ...uiElements, ...formAndTable]
//export default [...Inicio,...Personal,...Finanza,...Transporte,...Combustible,...Mantenimiento,...Gerencia]
