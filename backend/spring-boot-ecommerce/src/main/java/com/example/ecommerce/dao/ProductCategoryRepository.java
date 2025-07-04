package com.example.ecommerce.dao;

import com.example.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "productCategories", path = "product-categories")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
