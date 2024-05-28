import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'layout-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Letter Registry',
    icon: 'file-text-outline',
    link: '/pages/letter-registry/letter-registry-list',
    hidden: true,
    data: ['users_list']
  },
  {
    title: 'Projects',
    icon: 'file-text-outline',
    link: '/pages/project/project-list',
    hidden: true,
    data: ['users_list']
  },

  {
    title: 'Users',
    icon: 'person-outline',
    hidden: true,
    data: ['users_list', 'user_role_list', 'user_permission_list'],
    children: [
      {
        title: 'Users',
        link: '/pages/users/user-list',
      },
      {
        title: 'User Roles',
        link: '/pages/user-roles/role-list',
      },
      // {
      //   title: 'User Permissions',
      //   link: '/pages/user-permissions/permission-list',
      // },
    ],
  },

];
