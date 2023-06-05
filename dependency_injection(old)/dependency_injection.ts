class User {

}

interface UserRepo {
    getUsers: () => User[]
    // delete, create ...
}

class UserMongoDBRepo implements UserRepo {
    getUsers(): User[] {
        console.log('Підключаємось до MONGO та отримуємо користувачів')
        return [{age: 14, username: 'користувач з монго дб'}];
    }

}


class UserPostgresRepo implements UserRepo {
    getUsers(): User[] {
        console.log('Підключаємось до Postgres та отримуємо користувачів')
        return [{age: 14, username: 'користувач з монго дб'}];
    }

}

// Оприділяємо як буде працювати наш сервівс ззовні не міняючи його
class UserService {
    userRepo: UserRepo

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo;
    }

    filterUserByAge(age: number) {
        const users = this.userRepo.getUsers()
        // логіка філтрації
        console.log(users)
    }
}

const userService = new UserService(new UserPostgresRepo())
// const userService = new UserService(new UserMongoDBRepo())

userService.filterUserByAge(15)
