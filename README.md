1. FrontEnd: https://github.com/DiegoAndresMarmota/Proyecto-Final-Cookdemecum-FrontEnd
2. BackEnd: https://github.com/DiegoAndresMarmota/Proyecto-Final-Cookdemecum-BackEnd

3. Wireframes: https://www.figma.com/file/YpLr43n4EjWX8N3LS0X4DR/COOK-DEMECUM?node-id=0%3A1&t=ppASWezQCzELYBWR-1

4. Models:

/User
class User(AbstractBaseUser, PermissionsMixin):
    email       = models.EmailField(_('email address'), unique=True)
    user_name   = models.CharField(max_length=150, unique=True)
    first_name  = models.CharField(max_length=150)
    start_date  = models.DateTimeField(default=timezone.now)
    bio         = models.TextField(_('bio'), max_length=500, blank=True)
    image       = models.ImageField(null=True, blank=True, default='/pic.jpg')
    is_staff    = models.BooleanField(default=False)
    is_active   = models.BooleanField(default=True)
    objects     = CustomAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name']

/Blog
class Blog(models.Model):
    body = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    date = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)


5. Paleta de Colores: {
      white: "#ffffff",
      silver: "#ecebff",
      black: "#18181b",
    },

6. Fuentes: Sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
