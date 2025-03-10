import Link from "next/link";

type itemType = {item:{title:string, adr:string}};
const MenuItem = ({item}:itemType) => {
    return (
        <div>
            <li>
                <Link href={item.adr}>{item.title}</Link>
            </li>
        </div>
    );
}

export default MenuItem;