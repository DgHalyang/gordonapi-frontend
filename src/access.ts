/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    // 控制用户权限
    canUser: loginUser,
    canAdmin: loginUser?.userRole === 'admin',
  };
}
