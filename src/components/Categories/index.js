import "./index.css";

const Categories = (props) => {
    const { data, changeCategory } = props;
    const { name, icon, id } = data;

    const categoryChange = () => {
        changeCategory(id);
        console.log(id);
    };

    return (
        <li>
            <i>{icon}</i>
            <button onClick={categoryChange}>{name}</button>
        </li>
    );
};

export default Categories;
