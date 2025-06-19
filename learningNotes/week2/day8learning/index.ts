enum AccountStatusEnum {
  ACTIVE = "active",
  DISABLE = "disabled",
}

interface User {
  age: number;
  name: string;
  status: AccountStatusEnum;
}

const user: User = {
  age: 123,
  name: "john",
  status: AccountStatusEnum.ACTIVE,
};

//generics
