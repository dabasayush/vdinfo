import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            username: 'Ayush',
            email: 'ayush@example.com',
            password: bcrypt.hashSync('123456'),
        },
        {
            username: 'VishalDagar',
            email: 'vdexample.com',
            password: bcrypt.hashSync('123456'),
        },
    ],
    posts: [
        {
            title: 'Origin of the earth',
            description: "Quisque  justo. Nunc molestie massa eu turpis molestie ultricies. Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: false,
            url: '/images/blog.webp',
            metatitle: 'meta title by dev',
            metadescription: '',
        },
        {
            title: 'Programming in Javascript',
            description: "Quisque gravida, elit  Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: true,
            url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHw2fHxOZXclMjBZb3J8ZW58MHx8fHwxNjcwMjUzMzMw&ixlib=rb-4.0.3',
        },
        {
            title: 'Will AI makes programmers lose jobs',
            description: "Quisque gravida, elit  Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: true,
            url: 'https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxOHx8RWxlcGhhbnRzJTIwdGhhaWxhbmR8ZW58MHx8fHwxNjcwMzIyNzUx&ixlib=rb-4.0.3',
        },
        {
            title: 'AI future',
            description: "Quisque gravida, elit  Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: false,
            url: '/images/blog.webp',
        },
        {
            title: 'How to become better at coding?',
            description: "Quisque gravida, elit  Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: true,
            url: '/images/blog.webp',
        },
        {
            title: 'Discovery of new planet similar to Earth',
            description: "Quisque gravida, elit  Nulla sit amet est sollicitudin, molestie odio quis, facilisis urna. Donec eget leo eget tortor laoreet viverra eget nec felis. Vestibulum faucibus neque ligula, eget scelerisque est tincidunt non. Vestibulum luctus nulla sapien, ut tempus eros pulvinar et. Proin condimentum felis in est commodo, at blandit lacus egestas. Nulla eleifend est eu efficitur sagittis. Aliquam quis varius ligula. Ut mollis porttitor arcu sed lacinia.",
            isFeatured: true,
            url: '/images/blog.webp',
        },

    ],
}

export default data