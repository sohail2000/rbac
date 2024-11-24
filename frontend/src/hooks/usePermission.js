import { useCallback } from 'react';
import { ROLES } from '../constants/roles';
import { useUserRole } from './useUserRole';

export function usePermissions() {
  const { userRole, roleErr } = useUserRole();

  const hasPermission = useCallback((permission) => {
    if (roleErr) return false;

    return ROLES[userRole]?.includes(permission)
  }, [userRole]);

  const hasAnyPermission = useCallback((permissions) => {
    return permissions.some(permission => hasPermission(permission));
  }, [hasPermission]);

  const hasAllPermissions = useCallback((permissions) => {
    return permissions.every(permission => hasPermission(permission));
  }, [hasPermission]);

  return {
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
  };
}