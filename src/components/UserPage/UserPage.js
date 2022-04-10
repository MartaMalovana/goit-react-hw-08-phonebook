import ContactForm from "../ContactForm/ContactForm";
import ContactsList from "../ContactsList/ContactsList";
import UserMenu from "../UserMenu/UserMenu";
import Filter from "../Filter/Filter";

export default function UserPage () {

    return (
        <>
            <UserMenu />
            <h2 id="title-phonebook">Phonebook 222</h2>
            <ContactForm />
            <Filter />
            <ContactsList />
        </>
    );
}