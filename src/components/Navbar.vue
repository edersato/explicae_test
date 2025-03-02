<template>
  <div>
    <nav class="navbar-body-tertiary">
      <div class="container-fluid mb-2">
        <a href="https://lp.explicae.com.br/">
          <img src="../assets/logo.png" class="logo" alt="logo_explicae">
        </a>
      </div>
    </nav>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Cadernos</li>
        <li class="breadcrumb-item" aria-current="page">Lingua Portuguesa</li>
      </ol>
    </nav>
  </div>
</template>

<style lang="scss" scoped>

.logo {
    width: 10%;
}

.breadcrumb-item {
    font-size: 1.5rem;
    font-weight: lighter;
    
    &:last-child {
      font-weight: bold;
      text-decoration-color: #c05af0;
      text-decoration-line: underline;
      text-decoration-thickness: 5px;
    }
}

</style>