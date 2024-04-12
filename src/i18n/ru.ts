import russianMessages from "ra-language-russian";
import { TranslationMessages } from "react-admin";

const customRussianMessages: TranslationMessages = {
  ...russianMessages,
  ra: {
    ...russianMessages.ra,
    validation: {
      ...russianMessages.ra.validation,
      notMatch: "Пароли не совпадают",
    },
  },
  pos: {
    search: "Поиск",
    configuration: "Конфигурация",
    language: "Язык",
    theme: {
      name: "Тема",
      light: "Светлая",
      dark: "Темная",
    },
    auth: {
      password_repeat: "Повторите пароль",
      password_mismatch: "Пароли не совпадают",
      register: "Регистрация",
      register_error: "Произошла ошибка регистрации",
    },
    dashboard: {
      monthly_revenue: "Выручка за 30 дней",
      month_history: "Выручка за 30 дней",
      new_orders: "Новые заказы",
      pending_reviews: "Ожидающие отзывы",
      all_reviews: "Показать все отзывы",
      new_customers: "Новые клиенты",
      all_customers: "Показать всех клиентов",
      pending_orders: "Ожидающие заказы",
      order: {
        items: "от %{customer_name}, плакат |||| от %{customer_name}, %{nb_items} плаката",
      },
      welcome: {
        title: "Добро пожаловать в демонстрацию gitHub проекта на react-admin",
        subtitle:
          "Это интерфейс панели администратора вымышленного магазина постеров. Не стесняйтесь исследовать и изменять данные. Приятного пользования!",
        ra_button: "Api на nest.js для данного интерфейса",
        demo_button: "Исходный код этой демонстрации",
      },
    },
    menu: {
      sales: "Продажи",
      catalog: "Каталог",
      customers: "Клиенты",
    },
    events: {
      review: {
        title: 'Отзыв о "%{product}"',
      },
      order: {
        title:
          "Заказ 1 плаката |||| Заказ %{smart_count} плакатов |||| Заказ %{smart_count} плакатов",
      },
    },
  },
  resources: {
    users: {
      name: "Пользователь |||| Пользователи",
      fields: {
        name: "Пользователь",
        email: "Почта",
        avatar: "Аватар",
        is_admin: "Администратор",
        role: "Роль",
        password: "Пароль",
        confirm_password: "Подтвердите пароль",
      },
      actions: {
        make_admin: "Сделать админом",
        make_user: "Сделать юзером",
      },
      filters: {
        last_visited: "Последнее посещение",
        today: "Сегодня",
        this_week: "На этой неделе",
        last_week: "На прошлой неделе",
        this_month: "В этом месяце",
        last_month: "В прошлом месяце",
        earlier: "Ранее",
        has_ordered: "Уже заказал",
        has_newsletter: "Новостная рассылка",
        role: "ГРоль",
      },
      fieldGroups: {
        identity: "Личность",
        address: "Адрес",
        stats: "Статистика",
        history: "История",
        password: "Пароль",
        change_password: "Изменить пароль",
      },
      roles: {
        admin: "Администратор",
        user: "Пользователь",
      },
      page: {
        delete: "Удалить пользователя",
        create: "Создать пользователя",
      },
      errors: {
        password_mismatch: "Подтверждение пароля отличается от пароля.",
      },
    },
    customers: {
      name: "Клиент |||| Клиенты",
      fields: {
        address: "Адрес",
        birthday: "Дата рождения",
        city: "Город",
        stateAbbr: "Область",
        commands: "Заказы",
        first_name: "Имя",
        first_seen: "Первое посещение",
        groups: "Группы",
        has_newsletter: "Подписан на рассылку",
        has_ordered: "Заказал",
        last_name: "Фамилия",
        last_seen: "Последний просмотр",
        last_seen_gte: "Просмотрено с",
        last_seen_lte: "Просмотрено до",
        latest_purchase: "Последняя покупка",
        name: "Имя",
        total_spent: "Общие расходы",
        zipcode: "Почтовый индекс",
        password: "Пароль",
        confirm_password: "Подтвердите пароль",
      },
      filters: {
        last_visited: "Последнее посещение",
        today: "Сегодня",
        this_week: "На этой неделе",
        last_week: "На прошлой неделе",
        this_month: "В этом месяце",
        last_month: "В прошлом месяце",
        earlier: "Ранее",
        has_ordered: "Уже заказал",
        has_newsletter: "Новостная рассылка",
        group: "Группа",
      },
      fieldGroups: {
        identity: "Личность",
        address: "Адрес",
        stats: "Статистика",
        history: "История",
        password: "Пароль",
        change_password: "Изменить пароль",
      },
      page: {
        delete: "Удалить клиента",
      },
      errors: {
        password_mismatch: "Подтверждение пароля отличается от пароля.",
      },
    },
    commands: {
      name: "Заказ |||| Заказы",
      amount: "1 заказ |||| %{smart_count} заказа |||| %{smart_count} заказов",
      title: "Заказ №%{reference}",
      fields: {
        basket: {
          delivery: "Стоимость доставки",
          reference: "Ссылка",
          quantity: "Количество",
          sum: "Итого",
          tax_rate: "НДС",
          taxes: "НДС",
          total: "Итого",
          unit_price: "Цена за единицу",
        },
        address: "Адрес",
        customer_id: "Клиент",
        date_gte: "Выдано с",
        date_lte: "Выдано до",
        nb_items: "Кол-во товаров",
        reference: "Ссылка",
        returned: "Отменено",
        status: "Статус",
        total_gte: "Минимальная сумма",
      },
      section: {
        order: "Заказ",
        customer: "Клиент",
        shipping_address: "Адрес доставки",
        items: "Товары",
        total: "Итого",
      },
    },
    invoices: {
      name: "Счет |||| Счета",
      fields: {
        id: "Номер",
        date: "Дата выставления счета",
        customer_id: "Клиент",
        command_id: "Заказ",
        date_gte: "Дата выставления после",
        date_lte: "Дата выставления до",
        address: "Адрес",
        total_ex_taxes: "Общая сумма без налогов",
        delivery_fees: "Стоимость доставки",
        taxes: "НДС",
      },
    },
    products: {
      name: "Постер |||| Постеры",
      fields: {
        category_id: "Категория",
        height_gte: "Минимальная высота",
        height_lte: "Максимальная высота",
        height: "Высота",
        image: "Фото",
        price: "Цена",
        reference: "Название",
        sales: "Продажи",
        stock_lte: "Малый запас",
        stock: "Запас",
        thumbnail: "Миниатюра",
        width_gte: "Минимальная ширина",
        width_lte: "Максимальная ширина",
        width: "Ширина",
      },
      tabs: {
        image: "Изображение",
        details: "Детали",
        description: "Описание",
        reviews: "Отзывы",
      },
      filters: {
        categories: "Категории",
        stock: "Запас",
        no_stock: "Нет в наличии",
        low_stock: "1 - 9 единиц",
        average_stock: "10 - 49 единиц",
        enough_stock: "50 и более единиц",
        sales: "Продажи",
        best_sellers: "Лучшие продажи",
        average_sellers: "Средние",
        low_sellers: "Малые продажи",
        never_sold: "Никогда не продавалось",
      },
    },
    categories: {
      name: "Категория |||| Категории",
      fields: {
        name: "Название",
        products: "Продукты",
      },
    },
    reviews: {
      name: "Отзыв |||| Отзывы",
      amount: "1 отзыв |||| %{smart_count} отзыва |||| %{smart_count} отзывов",
      relative_to_poster: "Отзыв на",
      detail: "Детали отзыва",
      fields: {
        customer_id: "Клиент",
        command_id: "Заказ",
        product_id: "Продукт",
        date_gte: "Опубликовано после",
        date_lte: "Опубликовано до",
        date: "Дата",
        comment: "Текст",
        status: "Статус",
        rating: "Рейтинг",
      },
      action: {
        accept: "Принять",
        reject: "Отклонить",
        pending: "Отложить",
      },
      notification: {
        approved_success: "Отзыв одобрен",
        approved_error: "Ошибка: Отзыв не одобрен",
        rejected_success: "Отзыв отклонен",
        rejected_error: "Ошибка: Отзыв не отклонен",
      },
    },
    segments: {
      name: "Сегмент |||| Сегменты",
      fields: {
        customers: "Клиенты",
        name: "Название",
      },
      data: {
        compulsive: "Компульсивный",
        collector: "Коллекционер",
        ordered_once: "Заказал один раз",
        regular: "Регулярный",
        returns: "Вернулся",
        reviewer: "Рецензент",
      },
    },
  },
};

export default customRussianMessages;
