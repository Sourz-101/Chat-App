import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	const { authUser } = useAuthContext();

	return (
		<div className='mt-auto flex'>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
			<p className='text-white text-md ml-2 ps-16'>Hi {authUser.fullName.split(" ")[0]}</p>
		</div>
	);
};
export default LogoutButton;
