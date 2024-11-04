from django.db import models

class Base(models.Model):
    created_at = models.DateTimeField("Criado", auto_now_add=True)
    updated_at = models.DateTimeField("Atualizado", auto_now=True)
    disponivel = models.BooleanField("Status", default=True)
    class Meta:
        abstract = True

class Product(Base):
    nome = models.CharField("Nome", max_length=255, null=False, blank=False)
    valor = models.FloatField("Valor")
    descricao = models.TextField("Descrição", null=True, blank=True)
    imagem = models.FileField("Imagem", upload_to="imagens", null=True, blank=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

        def __str__(self) -> str:
            return self.nome