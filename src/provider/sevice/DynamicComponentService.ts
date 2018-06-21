import { ComponentFactoryResolver, Injectable, Inject } from '@angular/core';

@Injectable()
export class DynamicComponentService {
    public factoryResolver: any;
    public rootViewContainer: any;
    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
        this.factoryResolver = factoryResolver;
    }

    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }

    addDynamicComponent(DynamicComponent) {
        const factory = this.factoryResolver
            .resolveComponentFactory(DynamicComponent);
        const component = factory
            .create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    }
}
