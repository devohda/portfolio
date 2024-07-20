import { useRouter } from "next/router";

const Header = () => {
	const router = useRouter();

	const moveToSubPage = (index: number) => {
		router.push(`/introduce/Sub${index}`);
	};

	return (
		<>
			<div className="fixed top-0 z-10 w-full bg-white-040 backdrop-blur">
				<div className="mx-auto flex max-w-[1440px] items-center justify-end gap-x-[12px] py-[14px] px-[32px]">
					<button
						onClick={() => moveToSubPage(1)}
						className="h-[32px] rounded-[100px] border border-primary-06 px-[20px] transition-transform active:scale-95"
					>
						<div className="flex items-center justify-center gap-x-[4px] text-[13px] font-bold leading-[18px] text-primary-06">
							메뉴 1
						</div>
					</button>

					<button
						onClick={() => moveToSubPage(2)}
						className="h-[32px] rounded-[100px] border border-primary-06 px-[20px] transition-transform active:scale-95"
					>
						<div className="flex items-center justify-center gap-x-[4px] text-[13px] font-bold leading-[18px] text-primary-06">
							메뉴 2
						</div>
					</button>

					<button
						onClick={() => moveToSubPage(3)}
						className="h-[32px] rounded-[100px] border border-primary-06 px-[20px] transition-transform active:scale-95"
					>
						<div className="flex items-center justify-center gap-x-[4px] text-[13px] font-bold leading-[18px] text-primary-06">
							메뉴 3
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
