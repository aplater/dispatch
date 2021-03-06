const Menu = [
  { header: "Incidents" },
  {
    title: "Dashboard",
    group: "dashboard",
    component: "Dashboard",
    icon: "language",
    href: "/dashboard"
  },
  {
    title: "Incidents",
    group: "incidents",
    component: "Incidents",
    icon: "star",
    href: "/incidents"
  },
  {
    title: "Tasks",
    group: "tasks",
    component: "Tasks",
    icon: "playlist_add_check",
    href: "/tasks"
  },
  { header: "Routing" },
  {
    title: "Route",
    group: "routing",
    component: "route",
    icon: "place",
    href: "/route"
  },
  {
    title: "Policies",
    group: "routing",
    component: "Policies",
    icon: "clear_all",
    href: "/policies"
  },
  { header: "Contacts" },
  {
    title: "Individual",
    group: "contacts",
    icon: "person",
    href: "/individuals",
    name: "Individual"
  },
  {
    title: "Team",
    group: "contacts",
    name: "Team",
    icon: "people",
    href: "/teams"
  },
  {
    title: "Service",
    group: "contacts",
    name: "Service",
    icon: "room_service",
    href: "/services"
  },
  { header: "Knowledge" },
  {
    title: "Applications",
    group: "contacts",
    name: "Applications",
    icon: "computer",
    href: "/applications"
  },
  {
    title: "Documents",
    group: "knowledge",
    name: "Documents",
    icon: "assignment",
    href: "/documents"
  },
  {
    title: "Terms",
    group: "knowledge",
    name: "Terms",
    icon: "layers",
    href: "/terms"
  },
  {
    title: "Definitions",
    group: "knowledge",
    name: "Defintitions",
    icon: "book",
    href: "/definitions"
  },
  { header: "Configuration" },
  {
    title: "Incident Types",
    group: "Configuration",
    name: "Incident Types",
    icon: "settings_applications",
    href: "/incidents/types"
  }
]
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase()
      let textB = y.title.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })
  }
})

export default Menu
