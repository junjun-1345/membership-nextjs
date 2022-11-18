import Link from "next/link"

const Navigation = () => {
    return (
        <>
            <div className="bg-gray-900">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link legacyBehavior href='/'>
                                <a className="text-white hover:text-gray-50 font-extrabold text-lg" >
                                    フルスタックチャンネル
                                </a>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;